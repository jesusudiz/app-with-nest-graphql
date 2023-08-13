import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import {ProductsProviders}from './products.providers';
import {DatabaseModule}from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}