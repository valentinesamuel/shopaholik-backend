import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ADMINROLE, PersonnelLogin } from 'src/utils/Types';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepo.create(createUserDto);
      return this.userRepo.save(newUser);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAllUsers() {
    try {
      return this.userRepo.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOneUser(name: string, workerID: string) {
    try {
      const authenticUser = this.userRepo.findOne({
        where: {
          name,
          workerID,
        },
      });
      return authenticUser;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    try {
      this.userRepo.update(id, updateUserDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  removeUser(id: string) {
    try {
      return this.userRepo.delete(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
