import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: 'for the id of the product generated automatically by the DB' })
  id: number;
  @Field(() => String, { description: 'Product name' })
  title: string;
  @Field(() => String, { description: 'Price of the product' })
  price: string;
  @Field(() => String, { description: 'Category of the product' })
  category: string;
  @Field(() => String, { description: 'Category of the product' })
  stock: number;
  @Field(() => String, { description: 'Description of the product ' })
  description: string;
  @Field(() => String, { description: 'Image of the product' })
  image: string;
}