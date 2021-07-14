import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import fs from 'fs';
import PositionImage from './models/PositionImage.js';
dotenv.config();

const connectDB = async () => {
  try {
    let { MONGO_URI, MONGO_POSITIONS, MONGO_IMAGES } = process.env;
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`mongoDb connected ${conn.connection.host}`.cyan.underline);
    // const data = JSON.parse(
    //   fs.readFileSync('./assets/example-data.json', 'utf8')
    // );

    // const imageList = data.map(({ id, img }) => ({
    //   id,
    //   img,
    // }));
    // const positionsList = data.map((item) => {
    //   delete item.img;
    //   return item;
    // });

    // PositionImage.insertMany(imageList, function (err) {
    //   console.log({ err });
    // });
  } catch (error) {
    console.log(`error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
