import mongoose from 'mongoose';

const TaskModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isActive: Boolean,
});

export default mongoose.model('Tasks', TaskModel);
