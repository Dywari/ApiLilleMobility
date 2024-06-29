import { Test, TestingModule } from '@nestjs/testing';
import { VlilleController } from './vlille.controller';

describe('VlilleController', () => {
  let controller: VlilleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VlilleController],
    }).compile();

    controller = module.get<VlilleController>(VlilleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
