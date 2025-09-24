const { validationResult } = require('express-validator');
const Lead = require('../models/Lead');

// Create a new lead
const createLead = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Extract client info
    const clientIP = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Create lead object
    const leadData = {
      ...req.body,
      ip_address: clientIP,
      user_agent: userAgent
    };

    const lead = new Lead(leadData);
    await lead.save();

    // TODO: Add notification logic here (Telegram, email, etc.)
    
    res.status(201).json({
      status: 'success',
      lead_id: lead._id,
      message: 'Lead captured successfully'
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get all leads with filtering
const getLeads = async (req, res) => {
  try {
    const {
      form_type,
      utm_source,
      status,
      date_from,
      date_to,
      page = 1,
      limit = 50
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (form_type) filter.form_type = form_type;
    if (utm_source) filter['utm.source'] = utm_source;
    if (status) filter.status = status;
    
    // Date range filter
    if (date_from || date_to) {
      filter.created_at = {};
      if (date_from) filter.created_at.$gte = new Date(date_from);
      if (date_to) filter.created_at.$lte = new Date(date_to);
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query
    const leads = await Lead.find(filter)
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-user_agent -ip_address'); // Hide sensitive data

    const total = await Lead.countDocuments(filter);

    res.json({
      status: 'success',
      data: leads,
      pagination: {
        current_page: parseInt(page),
        total_pages: Math.ceil(total / parseInt(limit)),
        total_leads: total,
        per_page: parseInt(limit)
      }
    });

  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

// Get single lead by ID
const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    
    if (!lead) {
      return res.status(404).json({
        status: 'error',
        message: 'Lead not found'
      });
    }

    res.json({
      status: 'success',
      data: lead
    });

  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

// Update lead status
const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'contacted', 'qualified', 'converted', 'rejected'].includes(status)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid status value'
      });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status, updated_at: Date.now() },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({
        status: 'error',
        message: 'Lead not found'
      });
    }

    res.json({
      status: 'success',
      data: lead,
      message: 'Lead status updated successfully'
    });

  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

// Delete lead
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    
    if (!lead) {
      return res.status(404).json({
        status: 'error',
        message: 'Lead not found'
      });
    }

    res.json({
      status: 'success',
      message: 'Lead deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

// Get analytics summary
const getAnalytics = async (req, res) => {
  try {
    const { date_from, date_to } = req.query;
    
    // Build date filter
    const dateFilter = {};
    if (date_from || date_to) {
      dateFilter.created_at = {};
      if (date_from) dateFilter.created_at.$gte = new Date(date_from);
      if (date_to) dateFilter.created_at.$lte = new Date(date_to);
    }

    // Aggregate analytics
    const [
      totalLeads,
      formTypeBreakdown,
      sourceBreakdown,
      statusBreakdown,
      dailyStats
    ] = await Promise.all([
      // Total leads count
      Lead.countDocuments(dateFilter),
      
      // Breakdown by form type
      Lead.aggregate([
        { $match: dateFilter },
        { $group: { _id: '$form_type', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      
      // Breakdown by UTM source
      Lead.aggregate([
        { $match: dateFilter },
        { $group: { _id: '$utm.source', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      
      // Breakdown by status
      Lead.aggregate([
        { $match: dateFilter },
        { $group: { _id: '$status', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      
      // Daily statistics for the last 30 days
      Lead.aggregate([
        { 
          $match: {
            created_at: {
              $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
            }
          }
        },
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$created_at' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } }
      ])
    ]);

    res.json({
      status: 'success',
      data: {
        summary: {
          total_leads: totalLeads,
          conversion_rate: totalLeads > 0 ? ((statusBreakdown.find(s => s._id === 'converted')?.count || 0) / totalLeads * 100).toFixed(2) : 0
        },
        breakdown: {
          by_form_type: formTypeBreakdown,
          by_source: sourceBreakdown,
          by_status: statusBreakdown
        },
        daily_stats: dailyStats
      }
    });

  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
  getAnalytics
};
