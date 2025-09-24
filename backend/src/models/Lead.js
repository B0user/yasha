const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
    maxlength: 100
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\+[1-9]\d{1,14}$/, 'Phone number must be in international E.164 format (e.g. +14155552671)']
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxlength: 1000
  },
  form_type: {
    type: String,
    required: true,
    enum: ['quick', 'extended', 'callback'],
    default: 'quick'
  },
  utm: {
    source: { type: String, trim: true },
    medium: { type: String, trim: true },
    campaign: { type: String, trim: true },
    content: { type: String, trim: true },
    term: { type: String, trim: true }
  },
  ip_address: {
    type: String,
    required: false
  },
  user_agent: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'converted', 'rejected'],
    default: 'new'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Update the updated_at field before saving
leadSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Index for better query performance
leadSchema.index({ created_at: -1 });
leadSchema.index({ form_type: 1 });
leadSchema.index({ 'utm.source': 1 });
leadSchema.index({ status: 1 });

module.exports = mongoose.model('Lead', leadSchema);
