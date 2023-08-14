import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: String,
  category: String,
  description: String,
  image: String,
});