import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class ProductDTO {
 
  @Field(() => Int, { description: ' field id' })
    id:          number
  @Field(() => Int, { description: ' field title' })
    title:       string
  @Field(() => Int, { description: ' field price' })
    price:       string
  @Field(() => Int, { description: ' field category' })
    category:    string
  @Field(() => Int, { description: ' field description' })
    description: string
  @Field(() => Int, { description: ' field image' })
    image:       string
}