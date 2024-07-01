import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { Parking } from './parking';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Parking]), HttpModule],
  providers: [ParkingService],
  controllers: [ParkingController],
})
export class ParkingModule { }
