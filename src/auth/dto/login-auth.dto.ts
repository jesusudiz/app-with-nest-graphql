import {IsEmail,MaxLength,MinLength} from 'class-validator';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginAuthDTO {
    @IsEmail() 
    email: string
    @MinLength(8, { message: 'Debe contener más de 8 caracteres' })
    @MaxLength(12, { message: 'No debe superar más de 12 caracteres' })
    password:string
}