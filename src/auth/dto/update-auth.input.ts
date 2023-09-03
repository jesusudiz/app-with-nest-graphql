import { CreateAuthInputDTO } from './create-auth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInputDTO extends PartialType(CreateAuthInputDTO) {
  @Field(() => Int)
  id: number;
}
