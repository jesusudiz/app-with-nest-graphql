import { Document } from 'mongoose';

export interface Product extends Document {
  readonly id: Number;
  readonly title: String;
  readonly price: String;
  readonly category: String;
  readonly description: String;
  readonly image: String;
}
