import { Test, TestingModule } from '@nestjs/testing';
import { OrderedItemService } from './ordered-item.service';

describe('OrderedItemService', () => {
  let service: OrderedItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderedItemService],
    }).compile();

    service = module.get<OrderedItemService>(OrderedItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
