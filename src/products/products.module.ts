import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { DatabaseModule } from '../database/database.module';
import {ProductsProviders} from './products.providers';
@Module({
  imports: [DatabaseModule],
  providers: [ProductsResolver, ProductsService,...ProductsProviders],
})
export class ProductsModule {}