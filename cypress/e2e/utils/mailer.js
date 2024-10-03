const nodemailer = require('nodemailer');

// Nodemailer config
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525, 
  auth: {
    user: '371db353b3d2d7', // Mailtrap user
    pass: '506860618af12e' // Mailtrap password
  }
});

// Function for Email sending
const sendMail = (to, subject, html) => {
  const mailOptions = {
    from: '"OneSevenTest" <noreply@oneseven.com>', // sender
    to: "test@example.com", // rcpt
    subject: "Activate your account!",
    html: 
        `
        <p>Hello,</p>
        <p>Please activate your account by clicking the following link:</p>
        <a href="http://your-activation-link.com">Activate account</a>
        <p>Thank you,</p>
        <p>The Mailchimp team</p>
        `
    
  };

  // Send email
  return transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email sended: %s', info.messageId);
      return info;
    })
    .catch(error => {
      console.error('Error to send the email:', error);
      throw error;
    });
};

// function to export
module.exports = { sendMail };
