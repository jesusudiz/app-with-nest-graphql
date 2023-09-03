import {IsEmail,MaxLength,MinLength} from 'class-validator';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginAuthDTO {
    @IsEmail() 
    email: string
    @MinLength(8)
    @MaxLength(12)
    passwoord:string
}