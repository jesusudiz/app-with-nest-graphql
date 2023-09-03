import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  
  @Field(() => Int, { description: 'for the id of the product generated automatically by the DB' })
  id: number;
  @Field(() => String, { description: 'name of the user' })
  name: string;
  @Field(() => String, { description: 'Price of the product' })
  surname: string;
  @Field(() => String, { description: 'Category of the product' })
  email: string;
  @Field(() => String, { description: 'Category of the product' })
  password: string;
  @Field(() => String, { description: 'Description of the product ' })
  phone: number;
}
