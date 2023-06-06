import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  last_order_date: string;

  @IsString()
  profile_pic_url: string;

  @IsString()
  state: string;

  @IsString()
  additional_infromation?: string;

  @IsArray()
  orders?: [];
}
