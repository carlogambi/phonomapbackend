import expressAsyncHandler from 'express-async-handler';
import { v4 as uuidv4 } from 'uuid';
import PositionData from '../../../db/models/PositionData.js';
import User from '../../../db/models/User.js';

const providePositionsPack = async (req, res) => {
  const positionsList = await PositionData.find();
  positionsList.map((position) => {
    const { _doc } = position;
    delete _doc._id;
    delete _doc.createdAt;
    delete _doc.updatedAt;
    delete _doc.__v;
    return _doc;
  });
  if (positionsList) {
    res.json(positionsList);
  }
};

export default expressAsyncHandler(providePositionsPack);
