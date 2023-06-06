import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsArray, IsIn, IsInt, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  orderId: string;

  @IsString()
  orderNumber: string;

  @IsString()
  dateOfOrder: string;

  @IsIn(['CONFIRMED', 'PENDING', 'DELIVERED'])
  shippingStatus: string;

  @IsInt()
  price: number;

  @IsString()
  estimatedTimeOfArrival: string;

  @IsString()
  supplier_id: string;

  @IsArray()
  items: [];
}
