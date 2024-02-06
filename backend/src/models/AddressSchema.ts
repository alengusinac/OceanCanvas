import mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  address: { type: String },
  zipcode: { type: Number },
  city: { type: String },
  country: { type: String },
  phone: { type: String },
});
