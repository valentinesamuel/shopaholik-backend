/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    name: string,
    workerID: string,
    userPassword: string,
    role: string,
  ) {
    const autheduser = await this.userService.findOneUser(name, workerID);
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    if (
      autheduser &&
      autheduser.password !== hashedPassword &&
      autheduser.role !== role
    ) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: autheduser.workerID,
      name: autheduser.name,
      workerID: autheduser.workerID,
      role: autheduser.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
