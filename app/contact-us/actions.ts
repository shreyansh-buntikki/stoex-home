"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    console.log("========================================");
    console.log("📧 [Contact Us] SERVER-SIDE Action Called");
    console.log(
      "📧 [Contact Us] SMTP_HOST:",
      process.env.SMTP_HOST ? "✓ Set" : "✗ Missing",
    );
    console.log(
      "📧 [Contact Us] SMTP_PORT:",
      process.env.SMTP_PORT || "587 (default)",
    );
    console.log(
      "📧 [Contact Us] SMTP_USER:",
      process.env.SMTP_USER ? "✓ Set" : "✗ Missing",
    );
    console.log(
      "📧 [Contact Us] SMTP_PASSWORD:",
      process.env.SMTP_PASSWORD ? "✓ Set" : "✗ Missing",
    );
    console.log(
      "📧 [Contact Us] SMTP_SECURE:",
      process.env.SMTP_SECURE || "false (default)",
    );
    console.log("========================================");

    if (!formData.name || !formData.email || !formData.phone) {
      return {
        success: false,
        error: "Please fill in all required fields (Name, Email, and Phone)",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD
    ) {
      console.error("❌ [Contact Us] Missing SMTP configuration:", {
        hasHost: !!process.env.SMTP_HOST,
        hasUser: !!process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASSWORD,
      });
      return {
        success: false,
        error:
          "Email service is not configured. Please contact the administrator.",
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const firstName = formData.name.split(" ")[0];
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Asia/Dubai",
    });

    await transporter.sendMail({
      from: `"STOEX Website System" <${process.env.SMTP_USER}>`,
      to: "stoexuae@gmail.com",
      subject: "New Contact Form Submission – STOEX Website",
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
            <div class="header"><h1>📩 New Contact Form Submission – STOEX Website</h1></div>
            <div class="content">
              <p>Hello Team,</p>
              <p>A new visitor has submitted the contact form on the STOEX website. Details below:</p>
              <div class="field"><span class="label">Name:</span><div class="value">${formData.name}</div></div>
              <div class="field"><span class="label">Email:</span><div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div></div>
              <div class="field"><span class="label">Phone:</span><div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div></div>
              ${formData.company ? `<div class="field"><span class="label">Company:</span><div class="value">${formData.company}</div></div>` : ""}
              ${formData.message ? `<div class="field"><span class="label">Message:</span><div class="value"><div class="message-box">${formData.message}</div></div></div>` : ""}
              <div class="field"><span class="label">Submitted on:</span><div class="value">${submittedAt}</div></div>
              <div class="note"><strong>Action Required:</strong> Please review this enquiry and follow up within 1–2 business days.</div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission – STOEX Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}\n` : ""}${formData.message ? `Message:\n${formData.message}\n` : ""}
Submitted on: ${submittedAt}
      `.trim(),
    });

    await transporter.sendMail({
      from: `"STOEX" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: "We've received your message – STOEX",
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
            .footer { background-color: #f8f6f6; padding: 30px; text-align: center; color: #666; font-size: 14px; }
            .footer a { color: #0B1A4E; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header"><h1>Thanks for reaching out!</h1></div>
            <div class="content">
              <p>Dear <strong>${firstName}</strong>,</p>
              <p>Thank you for contacting STOEX. We've received your message and our team will review it shortly.</p>
              <div class="highlight">
                <p style="margin:0;"><strong>What's Next?</strong></p>
                <p style="margin:8px 0 0 0;">A member of our team will get back to you within <strong>1–2 business days</strong>.</p>
              </div>
              <p>If your enquiry is urgent, contact us directly at <a href="mailto:connectus@stoex.io" style="color:#0B1A4E;font-weight:600;">connectus@stoex.io</a>.</p>
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
      text: `
Dear ${firstName},

Thank you for contacting STOEX. We've received your message and our team will review it shortly.

What's Next?
A member of our team will get back to you within 1–2 business days.

If your enquiry is urgent, contact us directly at connectus@stoex.io.

Warm regards,
Team STOEX
      `.trim(),
    });

    return {
      success: true,
      message:
        "Thanks for reaching out! Check your email for confirmation. We'll get back to you shortly.",
    };
  } catch (error: any) {
    console.error("Error sending contact email:", error);

    if (error.code === "EAUTH" || error.responseCode === 535) {
      return {
        success: false,
        error:
          "Email authentication failed. Please check SMTP credentials.",
      };
    }

    if (error.code === "ECONNREFUSED") {
      return {
        success: false,
        error:
          "Cannot connect to email server. Please check SMTP host and port.",
      };
    }

    return {
      success: false,
      error:
        error.message || "An unexpected error occurred. Please try again later.",
    };
  }
}
