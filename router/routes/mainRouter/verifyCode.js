import asyncHandler from 'express-async-handler';
import User from '../../../db/models/User.js';

const verifyCode = async (req, res) => {
  const { code } = req.body;
  const loggedUser = await User.findOne({ email_code: code });
  if (!loggedUser) {
    res.status(400).json({ message: `no user has this code` });
    return;
  }
  res.json({
    message: 'login success',
  });
};

export default asyncHandler(verifyCode);
