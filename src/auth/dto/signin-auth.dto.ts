import { IsEnum, IsString } from 'class-validator';
import { ADMINROLE } from 'src/utils/Types';

export class SignAuthDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEnum(ADMINROLE)
  role: string;

  @IsString()
  workerID: string;
}
