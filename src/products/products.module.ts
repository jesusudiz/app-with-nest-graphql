import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { DatabaseModule } from '../database/database.module';
//import {ProductsProviders} from './products.providers';
import { MongooseModule } from '@nestjs/mongoose';
import {Product,ProductSchema} from './schemas/product.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema}])],
providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}