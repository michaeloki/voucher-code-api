import { Test, TestingModule } from '@nestjs/testing';
import { PseudoGeneratorController } from './pseudo-generator.controller';

describe('PseudoGeneratorController', () => {
  let controller: PseudoGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PseudoGeneratorController],
    }).compile();

    controller = module.get<PseudoGeneratorController>(PseudoGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
