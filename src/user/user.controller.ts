/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
    // return;
  }

  @Get()
  findAll() {
    // return this.userService.findAllUsers();
    return;
  }

  @Get()
  findOne(@Body('id') user: User) {
    return this.userService.findOneUser(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.userService.updateUser(id, updateUserDto);
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.userService.removeUser(id);
    return;
  }
}
