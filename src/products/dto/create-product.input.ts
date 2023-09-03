import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class ProductDTO {
 
  @Field(() => Int, { description: ' field id' })
    id:          number
  @Field(() => String, { description: ' field title' })
    title:       string
  @Field(() => String, { description: ' field price' })
    price:       string
  @Field(() => String, { description: ' field category' })
    category:    string
  @Field(() => String, { description: ' field description' })
    description: string
  @Field(() => String, { description: ' field image' })
    image:       string
}