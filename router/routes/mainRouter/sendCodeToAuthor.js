import asyncHandler from 'express-async-handler';
import User from '../../../db/models/User.js';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '../../../nodeMailer.js';

const template = ({ code }) => `use this code to log in \n${code}`;

const sendCodeToAuthor = async (req, res) => {
  const { email } = req.body;
  const loggedUser = await User.findOne({ email });
  if (!loggedUser) {
    res.status(400).json({ message: `can't verify email: ${email}` });
    return;
  }
  const code = uuidv4() + '';
  loggedUser.email_code = code;
  await loggedUser.save();
  const emailSended = sendEmail(email, template({ code }));
  console.log(email);
  res.json({
    message: emailSended
      ? 'cant send email to address'
      : 'email send to ' + email,
  });
};

export default asyncHandler(sendCodeToAuthor);
