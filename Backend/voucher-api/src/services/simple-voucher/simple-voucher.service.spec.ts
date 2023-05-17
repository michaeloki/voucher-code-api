import { Test, TestingModule } from '@nestjs/testing';
import { SimpleVoucherService } from './simple-voucher.service';

describe('SimpleVoucherService', () => {
  let service: SimpleVoucherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleVoucherService],
    }).compile();

    service = module.get<SimpleVoucherService>(SimpleVoucherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
