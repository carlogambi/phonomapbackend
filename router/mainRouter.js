import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import readFile from '../utils/readFile.js';
import sendCodeToAuthor from './routes/mainRouter/sendCodeToAuthor.js';
import verifyCode from './routes/mainRouter/verifyCode.js';

const mainRouter = express.Router();

mainRouter.route('/send_code_to_author').post(sendCodeToAuthor);
mainRouter.route('/verify_code').post(verifyCode);

mainRouter
  .route('/')
  .get(
    expressAsyncHandler(async (req, res) =>
      res.send(await readFile('./views/dashboard.html'))
    )
  );

mainRouter
  .route('/data-creator')
  .get(
    expressAsyncHandler(async (req, res) =>
      res.send(await readFile('./views/data-creator-attached.html'))
    )
  );

export default mainRouter;
