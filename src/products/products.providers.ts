import { Connection } from 'mongoose';
import { ProductSchema } from './schema/products.schema';

export const ProductsProviders = [
  {
    provide: 'PRODUCT',
    useFactory: (connection: Connection) => connection.model('Product',ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];