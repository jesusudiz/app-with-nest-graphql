import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDTO } from './dto/create-product.input';
import { UpdateProductDTO } from './dto/update-product.input';
import axios from 'axios';
import { Product } from './schemas/product.schema';

//import { Product } from './interfaces/product.interface';
@Injectable()
export class ProductsService {
  private readonly URL: string;
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
    this.URL = process.env.API_PRODUCTS;
  }

  async create(ProductDTO: ProductDTO): Promise<Product> {
    const response = await axios.post(this.URL, {
      data: ProductDTO,
    });
    const products = ProductDTO;
    return products;
  }

  async findAll(): Promise<Product[]> {
    const response = await axios.get(this.URL);
    const products = response.data;
    return products;
  }

  async findOne(id: number): Promise<Product> {
    const response = await axios.get(`${this.URL}/${id}`);
    const products = response.data;
    return products;
  }

  async update(id: number, updateProductDTO: UpdateProductDTO) {
    let product = await axios.get(`${this.URL}/${id}`);
    product = { ...product, ...updateProductDTO };
    return product;
  }

  async remove(id: number) {
    let product = await axios.get(`${this.URL}`);
    product = product.data.filter((data) => data.id !== id);
    return product;
  }
  async saveAllData(): Promise<string>  {
    try {
      const response = await axios.get(this.URL);
      const productsData = response.data;

      const bulkOps = productsData.map((productData) => ({
        insertOne: {
          document: productData,
        },
      }));

      const result = await this.productModel.collection.bulkWrite(bulkOps);

      console.log(`${result.insertedCount} productos insertados.`);
     return `${result.insertedCount} productos insertados.`
      
    } catch (error) {
      console.error('Error al guardar los datos en la base de datos:', error);
      throw new Error('No se pudieron guardar los datos en la base de datos.');
    }
  }
}
