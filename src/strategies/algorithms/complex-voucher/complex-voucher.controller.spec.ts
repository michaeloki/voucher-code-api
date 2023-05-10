import { Test, TestingModule } from '@nestjs/testing';
import { ComplexVoucherController } from './complex-voucher.controller';

describe('ComplexVoucherController', () => {
  let controller: ComplexVoucherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplexVoucherController],
    }).compile();

    controller = module.get<ComplexVoucherController>(ComplexVoucherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
