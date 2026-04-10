'use server'

import nodemailer from 'nodemailer';

interface EarlyAccessFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

export async function sendEarlyAccessEmail(formData: EarlyAccessFormData) {
  try {
    if (!formData.name || !formData.email || !formData.phone) {
      return {
        success: false,
        error: 'Please fill in all required fields (Name, Email, and Phone)'
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      };
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return {
        success: false,
        error: 'Email service is not configured. Please contact the administrator.'
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const firstName = formData.name.split(' ')[0];

    await transporter.sendMail({
      from: `"STOEX Website System" <${process.env.SMTP_USER}>`,
      to: 'stoexuae@gmail.com',
      subject: 'New Early Access Request – STOEX Website',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f6f6; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0B1A4E 0%, #1a1a7f 100%); color: white; padding: 30px 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
            .content { padding: 40px 30px; }
            .field { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #e5e5e5; }
            .field:last-of-type { border-bottom: none; }
            .label { font-weight: 600; color: #0B1A4E; font-size: 13px; margin-bottom: 6px; display: block; }
            .value { color: #333; font-size: 15px; line-height: 1.6; }
            .value a { color: #1a1a7f; text-decoration: none; }
            .message-box { background-color: #f8f6f6; padding: 16px; border-radius: 8px; border-left: 4px solid #1a1a7f; white-space: pre-wrap; }
            .note { background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px 16px; margin-top: 20px; border-radius: 4px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header"><h1>New Early Access Request – STOEX Website</h1></div>
            <div class="content">
              <p>Hello Team,</p>
              <p>A new user has requested early access to STOEX platform:</p>
              <div class="field"><span class="label">Name:</span><div class="value">${formData.name}</div></div>
              <div class="field"><span class="label">Email:</span><div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div></div>
              <div class="field"><span class="label">Phone:</span><div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div></div>
              ${formData.company ? `<div class="field"><span class="label">Company:</span><div class="value">${formData.company}</div></div>` : ''}
              ${formData.message ? `<div class="field"><span class="label">Message:</span><div class="value"><div class="message-box">${formData.message}</div></div></div>` : ''}
              <div class="field"><span class="label">Submitted on:</span><div class="value">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Dubai' })}</div></div>
              <div class="note"><strong>Action Required:</strong> Please add them to the early access list and follow up within 1–2 business days.</div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    await transporter.sendMail({
      from: `"STOEX" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: 'Welcome to STOEX Early Access – Your Request is Confirmed!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #333; margin: 0; padding: 0; background-color: #f8f6f6; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0B1A4E 0%, #1a1a7f 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 26px; font-weight: 700; }
            .content { padding: 40px 30px; }
            .content p { margin: 0 0 16px 0; font-size: 15px; line-height: 1.7; }
            .highlight { background-color: #f0f7ff; border-left: 4px solid #0B1A4E; padding: 16px; margin: 24px 0; border-radius: 4px; }
            .cta-box { background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center; }
            .footer { background-color: #f8f6f6; padding: 30px; text-align: center; color: #666; font-size: 14px; }
            .footer a { color: #0B1A4E; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header"><h1>Welcome to STOEX Early Access!</h1></div>
            <div class="content">
              <p>Dear <strong>${firstName}</strong>,</p>
              <p>Thank you for your interest in STOEX!</p>
              <p>We're thrilled to confirm that your early access request has been successfully received.</p>
              <div class="cta-box"><p style="margin:0;font-size:16px;font-weight:600;color:#2e7d32;">Your Early Access Request is Confirmed</p></div>
              <div class="highlight">
                <p style="margin:0;"><strong>What's Next?</strong></p>
                <p style="margin:8px 0 0 0;">Our team is reviewing your request. You'll receive onboarding information within <strong>1–2 business days</strong>.</p>
              </div>
              <p><strong>As an early access member, you'll get:</strong></p>
              <ul style="margin:8px 0;padding-left:20px;">
                <li>First access to our platform before public launch</li>
                <li>Exclusive product updates and insights</li>
                <li>Direct feedback channel to shape our product</li>
                <li>Priority support from our team</li>
              </ul>
              <p>If you have questions, contact us at <a href="mailto:connectus@stoex.io" style="color:#0B1A4E;font-weight:600;">connectus@stoex.io</a>.</p>
              <p style="margin-top:24px;"><strong>Warm regards,</strong><br>Team STOEX</p>
            </div>
            <div class="footer">
              <p><a href="mailto:connectus@stoex.io">connectus@stoex.io</a></p>
              <p><a href="https://www.stoex.io" target="_blank">www.stoex.io</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return {
      success: true,
      message: 'Thank you for signing up! Check your email for confirmation and next steps.'
    };

  } catch (error: any) {
    console.error('Error sending early access email:', error);

    if (error.code === 'EAUTH' || error.responseCode === 535) {
      return {
        success: false,
        error: 'Email authentication failed. Please check your SMTP credentials.'
      };
    }

    if (error.code === 'ECONNREFUSED') {
      return {
        success: false,
        error: 'Cannot connect to email server. Please check your SMTP settings.'
      };
    }

    return {
      success: false,
      error: error.message || 'An unexpected error occurred. Please try again later.'
    };
  }
}
