import { IsEnum, IsString } from 'class-validator';
import { ADMINROLE } from 'src/utils/Types';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEnum(ADMINROLE)
  role: string;
}
