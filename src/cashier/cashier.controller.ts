import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { SaleProduct, StockStatus } from 'src/utils/Types';

@Controller('cashier')
export class CashierController {
  constructor(private readonly productService: ProductService) {}

  @Get('/search')
  async searchProduct(@Query('params') searchParams: string) {
    const products = await this.productService.searchProductByName(
      searchParams,
    );
    return products;
  }

  @Post('/purchase')
  async UpdateProductQuantity(@Body() products: SaleProduct[]) {
    for (const product of products) {
      const { product_id, saleQuantity } = product;
      const prodFromDb = await this.productService.findOneProduct(product_id);

      if (prodFromDb) {
        prodFromDb.quantity_in_stock -= saleQuantity;
        prodFromDb.quantity_sold += saleQuantity;
        prodFromDb.stock_status = this.calculateStockStatus(
          prodFromDb.quantity_in_stock,
          prodFromDb.min_quantity,
        );
        await this.productService.updateProduct(
          prodFromDb.product_id,
          prodFromDb,
        );
      }
    }
    return;
  }

  private calculateStockStatus(
    quantityInStock: number,
    minQuantity: number,
  ): StockStatus {
    if (quantityInStock < minQuantity) {
      return StockStatus.LOW_IN_STOCK;
    } else if (quantityInStock === 0) {
      return StockStatus.OUT_OF_STOCK;
    } else {
      return StockStatus.IN_STOCK;
    }
  }
}
