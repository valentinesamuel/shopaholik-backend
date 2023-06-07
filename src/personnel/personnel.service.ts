import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel) private personnelRepo: Repository<Personnel>,
  ) {}
  async createPersonnel(createPersonnelDto: CreatePersonnelDto) {
    try {
      const newPersonnel = this.personnelRepo.create(createPersonnelDto);
      return await this.personnelRepo.save(newPersonnel);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  findAllPersonnels() {
    try {
      return this.personnelRepo.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findOnePersonnel(id: string) {
    try {
      return this.personnelRepo.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  updatePersonnel(id: string, updatePersonnelDto: UpdatePersonnelDto) {
    try {
      return this.personnelRepo.update(id, updatePersonnelDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  removePersonnel(id: string) {
    try {
      return this.personnelRepo.delete(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
