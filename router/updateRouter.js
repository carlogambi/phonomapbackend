import express from 'express';
import isLogged from './routes/updateRouter/isLogged.js';
import updatePositions from './routes/updateRouter/updatePositions.js';
import addAuthorEmail from './routes/updateRouter/addAuthorEmail.js';

import multer from 'multer';
const upload = multer();

const updateRouter = express.Router();

updateRouter
  .route('/update_position_list')
  .post(isLogged, upload.single('pack'), updatePositions);
updateRouter.route('/add_author_email').post(isLogged, addAuthorEmail);

export default updateRouter;
