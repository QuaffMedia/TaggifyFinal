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

// Admin email HTML content
const getAdminEmailContent = (data) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2>📩 New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone || 'Not provided'}</a></p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Service Interest:</strong> ${data.service || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <div style="margin-top: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 4px;">
      ${data.message}
    </div>
    <hr style="margin-top: 30px;" />
    <p style="font-size: 12px; color: #777;">Sent via Taggify Website Form</p>
  </div>
`;

// User email HTML content
const getUserEmailContent = (name) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #1a73e8;">Thank you for contacting Taggify!</h2>
    <p>Hi ${name},</p>
    <p>We’ve received your message and appreciate your interest in our audit services.</p>
    <p>One of our experts will review your inquiry and get back to you within <strong>24 hours</strong>.</p>
    <p>If it's urgent, feel free to call us at <a href="tel:+919876543210">+91 98765 43210</a>.</p>

    <br />
    <p>Best regards,</p>
    <p><strong>Team Taggify</strong><br />
    <a href="https://taggifyaudit.com" style="color: #1a73e8;">www.taggifyaudit.com</a></p>
  </div>
`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);

    if (!data.name || !data.email || !data.message || !data.company) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email to Admin (you)
    await transporter.sendMail({
      from: `"Taggify" <${process.env.ZOHO_USER}>`,
      to: 'info@taggifyaudit.com',
      replyTo: data.email,
      subject: 'New Contact Form Submission',
      html: getAdminEmailContent(data),
    });

    // Auto-reply to User
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
