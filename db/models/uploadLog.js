import mongoose from 'mongoose';

const uploadLogSchema = mongoose.Schema(
  {
    uploadDate: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const uploadLog = mongoose.model('uploadLog', uploadLogSchema);

export default uploadLog;
