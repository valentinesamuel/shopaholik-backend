import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderedItemDto } from './dto/create-ordered-item.dto';
import { UpdateOrderedItemDto } from './dto/update-ordered-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderedItem } from './entities/ordered-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderedItemService {
  constructor(
    @InjectRepository(OrderedItem)
    private orderedItemRepo: Repository<OrderedItem>,
  ) {}
  async createOrderedItem(createOrderedItemDto: CreateOrderedItemDto) {
    try {
      const orderedItem = await this.orderedItemRepo.create(
        createOrderedItemDto,
      );
      return await this.orderedItemRepo.save(orderedItem);
    } catch (error) {
      throw new BadRequestException({
        cause: error,
      });
    }
  }

  findAllOrderedItem() {
    try {
      return this.orderedItemRepo.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  findOneOrderedItem(id: string) {
    try {
      return this.orderedItemRepo.findOne({
        where: {
          ordered_item_id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  updateOrderedItem(id: string, updateOrderedItemDto: UpdateOrderedItemDto) {
    try {
      return this.orderedItemRepo.update(id, updateOrderedItemDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Could not update ordered item',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  removeOrderedItem(id: string) {
    try {
      return this.orderedItemRepo.delete(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Could not delete ordered-item',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
