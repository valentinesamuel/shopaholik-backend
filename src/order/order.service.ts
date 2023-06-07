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
  async createOrder(createOrderDto: CreateOrderDto) {
    try {
      const order = await this.orderRepo.create(createOrderDto);
      return await this.orderRepo.save(order);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  findAllOrders() {
    try {
      return this.orderRepo.find();
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  findOneOrder(id: string) {
    try {
      return this.orderRepo.findOne({
        where: { orderId: id },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      return this.orderRepo.update(id, updateOrderDto);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  removeOrder(id: string) {
    try {
      return this.orderRepo.delete(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
