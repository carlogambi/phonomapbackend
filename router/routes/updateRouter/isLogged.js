import expressAsyncHandler from 'express-async-handler';
import User from '../../../db/models/User.js';

const isLogged = async (req, res, next) => {
  let { email_code } = req.body;
  if (!email_code) {
    let { cookie } = req.headers;
    if (cookie && cookie !== '') {
      cookie = cookie.split('=');
      const keyIndex = cookie.indexOf('phonomap_data');
      if (keyIndex > -1) {
        const userData = JSON.parse(cookie[keyIndex + 1]);
        email_code = userData.email_code;
      }
    }
  }
  const loggedUser = await User.findOne({ email_code });
  if (loggedUser) {
    next();
  } else {
    res.status(500).json({ message: 'not logged' });
  }
};
export default expressAsyncHandler(isLogged);
