import express from 'express';
import providePositionsPack from './routes/provideRouter/providePositionsPack.js';
import providePositionImage from './routes/provideRouter/providePositionImage.js';
import provideAllPack from './routes/provideRouter/provideAllPack.js';
import cors from 'cors';

const provideRouter = express.Router();

provideRouter
  .route('/phonomap_positions_pack')
  .get(cors(), providePositionsPack);
provideRouter.route('/phonomap_image').get(cors(), providePositionImage);
provideRouter.route('/phonomap_all_pack').get(cors(), provideAllPack);

export default provideRouter;
