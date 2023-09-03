import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: number;
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  phone: number;
}

export const UserSchema = SchemaFactory.createForClass(User)