import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ADMINROLE } from 'src/utils/Types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsUUID()
  workerID: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsEnum(ADMINROLE)
  role: string;
}
