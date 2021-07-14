import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    // clientId: process.env.OAUTH_CLIENTID,
    // clientSecret: process.env.OAUTH_CLIENT_SECRET,
    // refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

export const sendEmail = (to, text) => {
  const mailOptions = {
    from: process.env.MAIL_ADDRESS,
    to,
    subject: '🤖 PHONOMAP BOT 🤖 ',
    text,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
};
