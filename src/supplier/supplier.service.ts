import {
  BadRequestException,
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
  async createSupplier(createSupplierDto: CreateSupplierDto) {
    try {
      const supplier = await this.supplierRepo.create(createSupplierDto);
      return await this.supplierRepo.save(supplier);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  findAllSuppliers() {
    try {
      return this.supplierRepo.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findOneSupplier(id: string) {
    try {
      return this.supplierRepo.findOne({
        where: {
          supplier_id: id,
        },
        // select: {
        //   orders: true,
        // },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findSupplierOrder(supplierId: string) {
    try {
      return this.supplierRepo.findOne({
        where: {
          supplier_id: supplierId,
        },
        select: {
          orders: true,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  updateSupplier(id: string, updateSupplierDto: UpdateSupplierDto) {
    try {
      return this.supplierRepo.update(id, updateSupplierDto);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  removeSupplier(id: string) {
    try {
      return this.supplierRepo.delete(id);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }
}
