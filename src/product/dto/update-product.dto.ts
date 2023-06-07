import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  product_id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsString()
  product_code: string;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  quantity_in_stock: number;

  @IsOptional()
  @IsInt()
  min_quantity: number;

  @IsOptional()
  @IsInt()
  unit_price: number;

  @IsOptional()
  @IsString()
  date_of_arrival: string;

  @IsOptional()
  @IsString()
  expiry_date: string;

  @IsOptional()
  @IsString()
  supplier_id: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  quantity_sold?: number;

  @IsOptional()
  @IsString()
  unit_of_measurement: string;

  @IsOptional()
  @IsString()
  shelf_life_duration: string;

  @IsOptional()
  @IsIn(['IN STOCK', 'LOW IN STOCK', 'OUT OF STOCK'])
  stock_status: string;
}
