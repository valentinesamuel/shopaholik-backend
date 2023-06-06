import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ProductModule } from './product/product.module';
import ORMConfig from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ORMConfig), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
