const express = require('express');
const rateLimit = require('express-rate-limit');
const {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
  getAnalytics
} = require('../controllers/leadController');
const { validateCreateLead } = require('../middleware/validation');

const router = express.Router();

// Rate limiting for lead creation (prevent spam)
const createLeadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    status: 'error',
    message: 'Too many lead submissions from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting for analytics (less restrictive)
const analyticsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

// Public routes
router.post('/', createLeadLimiter, validateCreateLead, createLead);

// Protected routes (in production, add authentication middleware)
router.get('/', getLeads);
router.get('/analytics', analyticsLimiter, getAnalytics);
router.get('/:id', getLeadById);
router.patch('/:id/status', updateLeadStatus);
router.delete('/:id', deleteLead);

module.exports = router;
