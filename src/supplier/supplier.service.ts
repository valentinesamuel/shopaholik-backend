import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier) private supplierRepo: Repository<Supplier>,
  ) {}
  async create(createSupplierDto: CreateSupplierDto) {
    try {
      const supplier = await this.supplierRepo.create(createSupplierDto);
      return await this.supplierRepo.save(supplier);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findAll() {
    try {
      return this.supplierRepo.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findOne(id: string) {
    try {
      return this.supplierRepo.findOne({
        where: {
          supplier_id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  update(id: string, updateSupplierDto: UpdateSupplierDto) {
    try {
      return this.supplierRepo.update(id, updateSupplierDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Could not update supplier',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  remove(id: string) {
    try {
      return this.supplierRepo.delete(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Could not delete supploer',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
