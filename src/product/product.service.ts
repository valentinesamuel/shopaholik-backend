import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async searchProductByName(productName: string) {
    if (productName.length < 1) {
      return;
    }
    try {
      return this.productRepo.find({
        where: [
          {
            name: Like(`%${productName}%`),
            // product_code: Like(`%${productName}%`),
          },
        ],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async createProduct(createProductDto: CreateProductDto) {
    try {
      const { quantity } = createProductDto;
      const newProduct = { ...createProductDto };
      newProduct.quantity_in_stock += quantity;
      delete newProduct.quantity;

      const product = await this.productRepo.create(newProduct);
      return await this.productRepo.save(product);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  findAllProducts() {
    try {
      return this.productRepo.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findOneProduct(id: string) {
    try {
      return this.productRepo.findOne({
        where: {
          product_id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  updateProduct(id: string, updateProductDto: UpdateProductDto) {
    try {
      return this.productRepo.update(id, updateProductDto);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  removeProduct(id: string) {
    try {
      return this.productRepo.delete(id);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }
}
