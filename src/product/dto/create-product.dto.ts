import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  product_code: string;

  @IsInt()
  @IsNotEmpty()
  quantity_in_stock: number;

  @IsInt()
  min_quantity: number;

  @IsInt()
  unit_price: number;

  @IsString()
  date_of_arrival: string;

  @IsString()
  expiry_date: string;

  @IsString()
  supplier_id: string;

  @IsInt()
  quantity?: number;

  @IsInt()
  quantity_sold?: number;

  @IsString()
  unit_of_measurement: string;

  @IsString()
  shelf_life_duration: string;

  @IsIn(['IN STOCK', 'LOW IN STOCK', 'OUT OF STOCK'])
  stock_status: string;
}
