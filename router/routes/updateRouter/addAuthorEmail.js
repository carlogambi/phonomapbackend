import expressAsyncHandler from 'express-async-handler';
import { v4 as uuidv4 } from 'uuid';
import User from '../../../db/models/User.js';

const addAuthorEmail = async (req, res) => {
  const { email_to_add } = req.body;
  const userExist = await User.exists({ email: email_to_add });
  if (userExist) {
    res
      .status(400)
      .json({ message: 'this email is already present in database' });
    return;
  }
  const user = await User.create({
    email: email_to_add,
    email_code: uuidv4(),
  });
  if (user) {
    res.json({ message: email + ' added to database' });
  } else {
    res.status(500).json({ message: 'cant insert user to database' });
  }
};

export default expressAsyncHandler(addAuthorEmail);
