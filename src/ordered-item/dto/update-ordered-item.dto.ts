import { PartialType } from '@nestjs/swagger';
import { CreateOrderedItemDto } from './create-ordered-item.dto';
import { IsInt, IsString, IsUUID } from 'class-validator';

export class UpdateOrderedItemDto extends PartialType(CreateOrderedItemDto) {
  @IsUUID()
  ordered_item_id: string;

  @IsString()
  name: string;

  @IsInt()
  quantity: number;

  @IsInt()
  unit_price: number;

  @IsString()
  order_id: string;

  @IsString()
  category: string;

  @IsInt()
  total_price: number;
}
