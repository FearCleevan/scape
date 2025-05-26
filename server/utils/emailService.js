const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verify-newsletter?token=${token}&email=${encodeURIComponent(email)}`;
  const unsubscribeLink = `${process.env.FRONTEND_URL}/unsubscribe?token=${token}&email=${encodeURIComponent(email)}`;

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: 'Please confirm your newsletter subscription',
    html: `
      <p>Thank you for subscribing to our newsletter!</p>
      <p>Please click the following link to confirm your subscription:</p>
      <p><a href="${verificationLink}">Confirm Subscription</a></p>
      <p>If you didn't request this, you can ignore this email or <a href="${unsubscribeLink}">click here to unsubscribe</a>.</p>
    `
  };

  await sgMail.send(msg);
};

const sendNewsletterEmail = async (email, token, subject, content) => {
  const unsubscribeLink = `${process.env.FRONTEND_URL}/unsubscribe?token=${token}&email=${encodeURIComponent(email)}`;

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: subject,
    html: `
      ${content}
      <hr>
      <p><small>If you no longer wish to receive these emails, you can <a href="${unsubscribeLink}">unsubscribe here</a>.</small></p>
    `
  };

  await sgMail.send(msg);
};

module.exports = { sendVerificationEmail, sendNewsletterEmail };