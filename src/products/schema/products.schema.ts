//import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document } from 'mongoose';

// export const productSchema = new mongoose.Schema({
//   id: Number,
//   title: String,
//   price: String,
//   category: String,
//   description: String,
//   image: String,
// });

export type productDocument= Product & Document;

Schema();
export class Product {
  @Prop({ primaryKey: true })
  id: number;
  @Prop()
  title: string;
  @Prop()
  price: string;
  @Prop()
  category: string;
  @Prop()
  description: string;
  @Prop({ unique: true, primaryKey: true })
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)