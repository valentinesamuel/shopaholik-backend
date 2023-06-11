import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { Module, OnModuleInit } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductExpirationService } from './productExpiration.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRE },
      }),
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, AuthGuard, ProductExpirationService],
})
export class ProductModule implements OnModuleInit {
  constructor(
    private productService: ProductService,
    private productExpirationService: ProductExpirationService,
  ) {}

  async onModuleInit() {
    await this.productExpirationService.startProductExpirationCheck();
  }
}
