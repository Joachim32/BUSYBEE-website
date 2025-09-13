const { sendContactEmail } = require('../services/emailService');

exports.submitContactForm = async (req, res) => {
  try {
    console.log('📋 Contact form received at:', new Date().toISOString());
    console.log('📦 Request body:', req.body);

    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    console.log('✅ Validation passed, attempting to send email...');

    // Send email
    await sendContactEmail({ name, email, phone, service, message });

    console.log('✅ Email sent successfully, sending response...');

    // Success response
    res.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error.message);
    console.error('Stack trace:', error.stack);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
};