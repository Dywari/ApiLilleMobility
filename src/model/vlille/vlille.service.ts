import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vlille } from './vlille';
import { Repository } from 'typeorm';

@Injectable()
export class VlilleService {
  constructor(
    @InjectRepository(Vlille)
    private stationVlilleRepository: Repository<Vlille>
  ) {}

  findAll(): Promise<Vlille[]> {
    return this.stationVlilleRepository.find();
  }

  findOne(id: string): Promise<Vlille> {
    return this.stationVlilleRepository.findOne({ where: { id } });
  }

  create(stationVlille: Vlille): Promise<Vlille> {
    return this.stationVlilleRepository.save(stationVlille);
  }

  async remove(id: string): Promise<void> {
    await this.stationVlilleRepository.delete(id);
  }
}
