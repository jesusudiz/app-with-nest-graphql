import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: number;
  @Prop()
  title: string;
  @Prop()
  price: string;
  @Prop()
  category: string;
  @Prop()
  description: string;
  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
