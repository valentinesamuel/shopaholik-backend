import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async createProduct(createProductDto: CreateProductDto) {
    try {
      const product = await this.productRepo.create(createProductDto);
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Could not update product',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  removeProduct(id: string) {
    try {
      return this.productRepo.delete(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Could not delete product',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
