import { PartialType } from '@nestjs/swagger';
import { SignAuthDto } from './signin-auth.dto';

export class UpdateAuthDto extends PartialType(SignAuthDto) {}
