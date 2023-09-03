import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthInputDTO {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
