import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = await this.orderRepo.create(createOrderDto);
      return await this.orderRepo.save(order);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: string) {
    try {
      return this.orderRepo.findOne({ where: { orderId: id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      return this.orderRepo.update(id, updateOrderDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Could not update order',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  remove(id: string) {
    return this.orderRepo.delete(id);
  }
}
