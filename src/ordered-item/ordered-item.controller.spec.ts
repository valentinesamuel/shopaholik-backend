import { Test, TestingModule } from '@nestjs/testing';
import { OrderedItemController } from './ordered-item.controller';
import { OrderedItemService } from './ordered-item.service';

describe('OrderedItemController', () => {
  let controller: OrderedItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderedItemController],
      providers: [OrderedItemService],
    }).compile();

    controller = module.get<OrderedItemController>(OrderedItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
