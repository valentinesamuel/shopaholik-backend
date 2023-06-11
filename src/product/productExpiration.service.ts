import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { StockStatus } from 'src/utils/Types';

@Injectable()
export class ProductExpirationService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async startProductExpirationCheck() {
    setInterval(async () => {
      const products = await this.productRepo.find();
      this.checkProductExpiration(products);
    }, 60000); // 60000 milliseconds = 1 minute
  }

  private checkProductExpiration(products: Product[]) {
    const currentDate = new Date();

    for (const product of products) {
      if (product.expiry_date == 'N/A') {
        continue;
      }
      const expiryDate = new Date(product.expiry_date);
      if (currentDate > expiryDate) {
        // Update the product's stock status to EXPIRED
        product.stock_status = StockStatus.EXPIRED;
      }
    }

    // Save the updated products to the database
    return this.productRepo.save(products);
  }
}
