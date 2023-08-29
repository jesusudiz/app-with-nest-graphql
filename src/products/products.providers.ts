import { ProductSchema  } from './schemas/product.schema';
import { Connection } from 'mongoose';

export const ProductsProviders = [
  {
    provide: 'PRODUCT',
    useFactory: (connection: Connection) => connection.model('Product',ProductSchema ),
    inject: ['DATABASE_CONNECTION'],
  },
];
