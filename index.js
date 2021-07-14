import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import connectDB from './db/mongooseConnect.js';
import dotenv from 'dotenv';
import updateRouter from './router/updateRouter.js';
import mainRouter from './router/mainRouter.js';
import cors from 'cors';
import provideRouter from './router/provideRouter.js';
import PositionData from './db/models/PositionData.js';
import PositionImage from './db/models/PositionImage.js';
import readFile from './utils/readFile.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const port = 3000;

connectDB();

app.use('/update', updateRouter);
app.use('/', mainRouter);
app.use('/get', provideRouter);

// (async () => {
//   PositionData.deleteMany();
//   PositionImage.deleteMany();
// })();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
