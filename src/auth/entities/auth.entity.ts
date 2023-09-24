import { ObjectType, Field } from '@nestjs/graphql';
import { PickType } from '@nestjs/swagger';
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
export class AuthResponse extends PickType( Auth, ['email'] as const) {
  @Field(() => String, { description: 'name of the user' })
  email: string;
  @Field(() => String, { description: 'Mensaje de éxito al guardar usuario' })
  message: string;
}

@ObjectType()
export class UserLoged extends PickType( Auth, ['email'] as const){
  @Field(() => String, { description: 'name of the user' })
  email: string;
  @Field(() => String, { description: 'status user' })
  status: boolean;
}