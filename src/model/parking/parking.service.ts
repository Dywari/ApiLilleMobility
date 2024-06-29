import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parking } from './parking';

@Injectable()
export class ParkingService {
  constructor(
    @InjectRepository(Parking)
    private parkingRepository: Repository<Parking>
  ) {}

  findAll(): Promise<Parking[]> {
    return this.parkingRepository.find();
  }

  findOne(id: string): Promise<Parking> {
    return this.parkingRepository.findOne({ where: { id } });
  }

  create(parking: Parking): Promise<Parking> {
    return this.parkingRepository.save(parking);
  }

  async remove(id: string): Promise<void> {
    await this.parkingRepository.delete(id);
  }
}
