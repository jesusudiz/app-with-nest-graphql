import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsEmail,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsAlphanumeric,
  IsNumber,
} from 'class-validator';

@InputType()
export class CreateAuthInputDTO {
  @Field(() => Int, { description: ' field Id' })
  id?: number;

  @Field(() => String, { description: ' field name' })
  @IsNotEmpty({ message: 'El $property no debe estar vacio' })
  name: string;

  @Field(() => String, { description: ' field surname' })
  @IsNotEmpty()
  surname: string;

  @Field(() => String, { description: ' field email' })
  @IsNotEmpty({ message: 'El $property no debe estar vacio' })
  @IsEmail()
  email: string;

  @Field(() => String, { description: ' field password' })
  @IsNotEmpty({ message: 'El $property no debe estar vacio' })
  @MinLength(8, { message: 'Debe contener más de 8 caracteres' })
  @MaxLength(12, { message: 'No debe superar más de 12 caracteres' })
  @IsAlphanumeric()
  password: string;

  @Field(() => Int, { description: ' field phone' })
  @IsNotEmpty({ message: 'El $property no debe estar vacio' })
  @IsNumber()
  phone: number;
}
;
