import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const Category = mongoose.model('Categories', CategorySchema);
