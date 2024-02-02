import mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
});
