import { Test, TestingModule } from '@nestjs/testing';
import { ComplexVoucherService } from './complex-voucher.service';

describe('ComplexVoucherService', () => {
  let service: ComplexVoucherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplexVoucherService],
    }).compile();

    service = module.get<ComplexVoucherService>(ComplexVoucherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
