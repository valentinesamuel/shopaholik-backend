import { Injectable } from '@nestjs/common';
import { Product } from 'src/product/entities/product.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class CashierService {
  constructor(private readonly productService: ProductService) {}
}
