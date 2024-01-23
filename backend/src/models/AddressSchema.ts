import mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  zipcode: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});
