import { IsIn, IsInt, IsString } from 'class-validator';

export class CreateOrderDto {
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
}
