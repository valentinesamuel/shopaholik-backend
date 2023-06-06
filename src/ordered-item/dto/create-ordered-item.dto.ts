import { IsEnum, IsInt, IsString } from 'class-validator';
import { ProductCategory } from 'src/utils/Types';

export class CreateOrderedItemDto {
  @IsString()
  name: string;

  @IsInt()
  quantity: number;

  @IsInt()
  unit_price: number;

  @IsString()
  order_id: string;

  @IsEnum(ProductCategory)
  category: string;

  @IsInt()
  total_price: number;
}
