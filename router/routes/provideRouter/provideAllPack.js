import expressAsyncHandler from 'express-async-handler';
import PositionImage from '../../../db/models/PositionImage.js';
import PositionData from '../../../db/models/PositionData.js';

const provideAllPack = async (req, res, next) => {
  console.log('provideAllPack');
  const positionsList = await PositionData.find();

  const fullPack = await Promise.all(
    positionsList.map(async (position) => {
      const doc = position.toObject();
      const img = await PositionImage.findOne({ id: doc.id });
      doc.img = img.toObject().img;
      delete doc._id;
      delete doc.createdAt;
      delete doc.updatedAt;
      delete doc.__v;
      return doc;
    })
  );

  if (fullPack) {
    res.json(fullPack);
  }
};

export default expressAsyncHandler(provideAllPack);
