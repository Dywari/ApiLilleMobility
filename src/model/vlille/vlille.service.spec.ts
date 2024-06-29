import { Test, TestingModule } from '@nestjs/testing';
import { VlilleService } from './vlille.service';

describe('VlilleService', () => {
  let service: VlilleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VlilleService],
    }).compile();

    service = module.get<VlilleService>(VlilleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
