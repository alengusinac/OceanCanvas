import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    sizes: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Sizes',
      // required: true,
    },
    priceMultiplier: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Products', ProductSchema);
