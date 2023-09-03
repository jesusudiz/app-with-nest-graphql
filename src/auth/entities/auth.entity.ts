import { ObjectType, Field, Int } from '@nestjs/graphql';
import { extendSchema } from 'graphql';

@ObjectType()
export class Auth {
 
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

@ObjectType()
export class AuthResponse extends Auth {
  @Field(() => String, { description: 'name of the user' })
  user: string;
  @Field(() => String, { description: 'Mensaje de éxito al guardar usuario' })
  message: string;
}
