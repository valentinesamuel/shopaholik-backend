import { Module } from '@nestjs/common';
import { OrderedItemService } from './ordered-item.service';
import { OrderedItemController } from './ordered-item.controller';
import { OrderedItem } from './entities/ordered-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderedItem])],
  controllers: [OrderedItemController],
  providers: [OrderedItemService],
})
export class OrderedItemModule {}
