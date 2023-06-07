import { PartialType } from '@nestjs/swagger';
import { CreatePersonnelDto } from './create-personnel.dto';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { ADMINROLE, JobDesignation } from 'src/utils/Types';

export class UpdatePersonnelDto extends PartialType(CreatePersonnelDto) {
  @IsString()
  id: string;

  @IsString()
  personnelId: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  middleName: string;

  @IsOptional()
  @IsString()
  dateOfBirth: string;

  @IsOptional()
  @IsString()
  dateOfHire: string;

  @IsOptional()
  @IsString()
  profilePicture: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsString()
  additionalInfo: string;

  @IsOptional()
  @IsString()
  guarantorName: string;

  @IsOptional()
  @IsString()
  relationshipWithStaff: string;

  @IsOptional()
  @IsString()
  guarantorPhone: string;

  @IsOptional()
  @IsString()
  guarantorEmail: string;

  @IsOptional()
  @IsString()
  guarantorAddress: string;

  @IsOptional()
  @IsEnum([JobDesignation])
  @IsEnum([ADMINROLE])
  jobDesignation: string;

  @IsOptional()
  @IsInt()
  monthlySalary: number;
}
