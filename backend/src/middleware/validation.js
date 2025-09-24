const { body } = require('express-validator');

// Validation rules for creating a lead
const validateCreateLead = [
  body('phone')
    .matches(/^\+[1-9]\d{1,14}$/)
    .withMessage('Phone number must be in international E.164 format (e.g. +14155552671)'),
  
  body('name')
    .optional()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .trim(),
  
  body('email')
    .optional()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('description')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Description must not exceed 1000 characters')
    .trim(),
  
  body('form_type')
    .isIn(['quick', 'extended', 'callback'])
    .withMessage('Form type must be one of: quick, extended, callback'),
  
  body('utm.source')
    .optional()
    .isLength({ max: 50 })
    .withMessage('UTM source must not exceed 50 characters')
    .trim(),
  
  body('utm.medium')
    .optional()
    .isLength({ max: 50 })
    .withMessage('UTM medium must not exceed 50 characters')
    .trim(),
  
  body('utm.campaign')
    .optional()
    .isLength({ max: 100 })
    .withMessage('UTM campaign must not exceed 100 characters')
    .trim(),
  
  body('utm.content')
    .optional()
    .isLength({ max: 100 })
    .withMessage('UTM content must not exceed 100 characters')
    .trim(),
  
  body('utm.term')
    .optional()
    .isLength({ max: 100 })
    .withMessage('UTM term must not exceed 100 characters')
    .trim()
];

module.exports = {
  validateCreateLead
};
