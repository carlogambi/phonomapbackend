import express from 'express';
import providePositionsPack from './routes/provideRouter/providePositionsPack.js';
import providePositionImage from './routes/provideRouter/providePositionImage.js';
import provideAllPack from './routes/provideRouter/provideAllPack.js';
import config from './../config.js';
import cors from 'cors';

const provideRouter = express.Router();

provideRouter
  .route('/phonomap_positions_pack')
  .get(cors(config.cors), providePositionsPack);
provideRouter
  .route('/phonomap_image')
  .get(cors(config.cors), providePositionImage);
provideRouter
  .route('/phonomap_all_pack')
  .get(cors(config.cors), provideAllPack);

export default provideRouter;
