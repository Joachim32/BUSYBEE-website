require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('🔍 Testing email configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '*** set ***' : 'NOT SET');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Connection failed:', error.message);
    console.log('💡 Tips:');
    console.log('1. Make sure 2FA is enabled on your Gmail');
    console.log('2. Use App Password, not your regular password');
    console.log('3. Visit: https://accounts.google.com/DisplayUnlockCaptcha');
  } else {
    console.log('✅ Server is ready to take our messages');
    
    // Test sending an email
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Test Email from BusyBee',
      text: 'This is a test email from your BusyBee backend!'
    }, (err, info) => {
      if (err) {
        console.log('❌ Send failed:', err.message);
      } else {
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
      }
    });
  }
});