import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { OrderedItemModule } from './ordered-item/ordered-item.module';
import { OrderModule } from './order/order.module';
import { PersonnelModule } from './personnel/personnel.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MetricModule } from './metric/metric.module';
import { CashierModule } from './cashier/cashier.module';
import ORMConfig from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORMConfig),
    SupplierModule,
    OrderModule,
    OrderedItemModule,
    ProductModule,
    PersonnelModule,
    UserModule,
    AuthModule,
    MetricModule,
    CashierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
