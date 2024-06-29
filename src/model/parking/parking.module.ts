import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { Parking } from './parking';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parking])],
  providers: [ParkingService],
  controllers: [ParkingController],
})
export class ParkingModule {}
