// lib/email.ts - Email service integration with Resend

import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@nexial.ai';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admissions@nexial.ai';

let resend: Resend | null = null;

if (RESEND_API_KEY) {
  resend = new Resend(RESEND_API_KEY);
} else {
  console.warn('RESEND_API_KEY not configured. Emails will not be sent.');
}

export async function sendApplicationConfirmation(
  recipientEmail: string,
  recipientName: string
): Promise<boolean> {
  if (!resend) {
    console.warn('Resend not configured. Skipping confirmation email.');
    return false;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: recipientEmail,
      subject: 'Application Received - NEXIAL AI Master\'s Programme',
      html: `
        <h1>Thank You for Your Application</h1>
        <p>Dear ${recipientName},</p>
        <p>We have received your application to the NEXIAL AI Master's Programme 2026 cohort.</p>
        <p>Our admissions team will review your application carefully and contact you within 2 weeks with a decision.</p>
        <p>In the meantime, if you have any questions, please don't hesitate to reach out.</p>
        <p>Best regards,<br/>The NEXIAL Admissions Team</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return false;
  }
}

export async function sendAdminNotification(
  applicationId: string,
  applicantName: string,
  applicantEmail: string
): Promise<boolean> {
  if (!resend) {
    console.warn('Resend not configured. Skipping admin notification.');
    return false;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Application Submitted: ${applicantName}`,
      html: `
        <h1>New Application Received</h1>
        <p>A new application has been submitted to the NEXIAL AI Master's Programme.</p>
        <ul>
          <li><strong>Applicant:</strong> ${applicantName}</li>
          <li><strong>Email:</strong> ${applicantEmail}</li>
          <li><strong>Application ID:</strong> ${applicationId}</li>
          <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/dashboard">Review in Admin Dashboard</a></p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return false;
  }
}

export async function sendApplicationDecision(
  recipientEmail: string,
  recipientName: string,
  decision: 'accepted' | 'rejected' | 'waitlisted'
): Promise<boolean> {
  if (!resend) {
    console.warn('Resend not configured. Skipping decision email.');
    return false;
  }

  const subjectLines = {
    accepted: '🎉 Congratulations - You\'re Accepted to NEXIAL!',
    rejected: 'NEXIAL Application Status',
    waitlisted: 'NEXIAL Application Status',
  };

  const messages = {
    accepted:
      'We are delighted to inform you that you have been accepted to the NEXIAL AI Master\'s Programme 2026 cohort!',
    rejected:
      'Thank you for your application. Unfortunately, we were not able to offer you a place in this cohort.',
    waitlisted:
      'Thank you for your application. We are impressed with your background and would like to place you on our waitlist.',
  };

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: recipientEmail,
      subject: subjectLines[decision],
      html: `
        <h1>Application Decision</h1>
        <p>Dear ${recipientName},</p>
        <p>${messages[decision]}</p>
        <p>We will be in touch soon with next steps.</p>
        <p>Best regards,<br/>The NEXIAL Admissions Team</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Failed to send decision email:', error);
    return false;
  }
}
