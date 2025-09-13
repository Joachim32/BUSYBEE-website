const nodemailer = require('nodemailer');

console.log('📧 Email service loading...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendContactEmail = async (formData) => {
  try {
    console.log('📧 Starting email send process...');
    const { name, email, phone, service, message } = formData;

    console.log('📨 Preparing email for:', email);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    console.log('📤 Sending email...');
    const result = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully! Message ID:', result.messageId);
    console.log('✅ Email sent to:', process.env.CONTACT_EMAIL);
    
    return true;

  } catch (error) {
    console.error('❌ Email sending failed:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    
    throw new Error(`Email failed: ${error.message}`);
  }
};

// Test email connection on startup
const testEmailConnection = async () => {
  try {
    console.log('🔌 Testing email connection...');
    await transporter.verify();
    console.log('✅ Email server connection successful');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error.message);
    return false;
  }
};

// Test connection when this file loads
testEmailConnection().then(result => {
  console.log(result ? '✅ Email service ready' : '❌ Email service failed');
});

module.exports = { sendContactEmail, testEmailConnection };