import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderedItemService } from './ordered-item.service';
import { CreateOrderedItemDto } from './dto/create-ordered-item.dto';
import { UpdateOrderedItemDto } from './dto/update-ordered-item.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('orderedItem')
export class OrderedItemController {
  constructor(private readonly orderedItemService: OrderedItemService) {}

  @Post()
  create(@Body() createOrderedItemDto: CreateOrderedItemDto) {
    return this.orderedItemService.createOrderedItem(createOrderedItemDto);
  }

  @Get()
  findAll() {
    return this.orderedItemService.findAllOrderedItem();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderedItemService.findOneOrderedItem(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderedItemDto: UpdateOrderedItemDto,
  ) {
    return this.orderedItemService.updateOrderedItem(id, updateOrderedItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderedItemService.removeOrderedItem(id);
  }
}
