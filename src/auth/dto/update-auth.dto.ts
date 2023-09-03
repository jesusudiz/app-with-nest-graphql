import { CreateAuthInputDTO } from './create-auth.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInputDTO extends PartialType(CreateAuthInputDTO) {
  @Field(() => Int, { description: ' field Id' })
  id: number;
  @Field(() => Int, { description: ' field name' })
  name: string;
  @Field(() => Int, { description: ' field surname' })
  surname: string;
  @Field(() => Int, { description: ' field email' })
  email: string;
  @Field(() => Int, { description: ' field password' })
  password: string;
  @Field(() => Int, { description: ' field phone' })
  phone: number;
}
