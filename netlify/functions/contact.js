const nodemailer = require('nodemailer');

// Create transporter with Zoho SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

// Email templates
const getAdminEmailContent = (data) => `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company}
Service Interest: ${data.service || 'Not specified'}

Message:
${data.message}
`;

const getUserEmailContent = (name) => `
Dear ${name},

Thank you for contacting Taggify. We have received your message and appreciate your interest in our services.

Our team will review your inquiry and respond within 24 hours.

Best regards,
The Taggify Team
`;

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);

    // Validate required fields
    if (!data.name || !data.email || !data.message || !data.company) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Send email to admin
    await transporter.sendMail({
  from: `"Taggify" <${process.env.ZOHO_USER}>`,
  to: 'info@taggifyaudit.com',
  replyTo: data.email, // ← lets you see user's email when replying
  subject: 'New Contact Form Submission',
  html: getAdminEmailContent(data),
});

    // Send auto-reply to user
   await transporter.sendMail({
  from: `"Taggify" <${process.env.ZOHO_USER}>`,
  to: data.email,
  subject: 'Thank you for contacting Taggify',
  html: getUserEmailContent(data.name),
});


    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process contact form submission' })
    };
  }
};
