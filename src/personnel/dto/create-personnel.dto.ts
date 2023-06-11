import { IsEnum, IsInt, IsString } from 'class-validator';
import { ADMINROLE, JobDesignation } from 'src/utils/Types';

export class CreatePersonnelDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  middleName: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  dateOfHire: string;

  @IsString()
  profilePicture: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  gender: string;

  additionalInfo: string;

  @IsString()
  guarantorName: string;

  @IsString()
  relationshipWithStaff: string;

  @IsString()
  guarantorPhone: string;

  @IsString()
  guarantorEmail: string;

  @IsString()
  guarantorAddress: string;

  @IsEnum([...Object.values(ADMINROLE), ...Object.values(JobDesignation)])
  jobDesignation: string;

  monthlySalary: number;
}
