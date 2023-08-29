import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductDTO } from './dto/create-product.input';
import { UpdateProductDTO } from './dto/update-product.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(@Args('createProductDTO') createProductDTO: ProductDTO) {
    return this.productsService.create(createProductDTO);
  }

  @Query(() =>[Product], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProductDTO') updateProductDTO: UpdateProductDTO
  )  {
    return this.productsService.update(updateProductDTO.id, updateProductDTO);
  }

  @Mutation(() => [Product])
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
  @Mutation(() => String)
  async saveAllData(): Promise<string> {
    try {
      const result = await this.productsService.saveAllData();
      return result;
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      throw new Error('No se pudieron guardar los datos.');
    }
  }
}
 