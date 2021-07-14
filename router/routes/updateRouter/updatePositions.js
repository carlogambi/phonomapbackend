import expressAsyncHandler from 'express-async-handler';
import PositionImage from '../../../db/models/PositionImage.js';
import PositionData from '../../../db/models/PositionData.js';

const updatePositions = async (req, res, next) => {
  const { file } = req;
  const positionPack = JSON.parse(await file.buffer.toString('utf8'));
  if (positionPack) {
    const positionList = positionPack.map(
      ({ position, sounds, id, title, author, description }) => ({
        id,
        description,
        title,
        author,
        position,
        sounds,
      })
    );
    const imageList = positionPack.map(({ id, img }) => ({
      img,
      id,
    }));
    try {
      await PositionImage.deleteMany();
      await PositionData.deleteMany();
      await PositionImage.insertMany(imageList);
      await PositionData.insertMany(positionList);
    } catch (e) {
      res.json({ message: e.message });
    }
    res.json({ message: 'upload done' });
  }
  let a = 'o';
};

export default expressAsyncHandler(updatePositions);
