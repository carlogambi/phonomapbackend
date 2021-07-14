import expressAsyncHandler from 'express-async-handler';
import PositionImage from '../../../db/models/PositionImage.js';
import User from '../../../db/models/User.js';

const providePositionImage = async (req, res, next) => {
  const { id } = req.query;
  const image = await PositionImage.findOne({ id });
  if (image) {
    res.send(image._doc.img);
  }
};

export default expressAsyncHandler(providePositionImage);
