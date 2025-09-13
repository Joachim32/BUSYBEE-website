const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

// POST /api/contact - Handle contact form submissions
router.post('/', submitContactForm);

module.exports = router;