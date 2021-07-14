import mongoose from 'mongoose';
const imageSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const PositionImage = mongoose.model('PositionImage', imageSchema);

export default PositionImage;
