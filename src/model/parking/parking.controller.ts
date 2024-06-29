import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Parking } from './parking';
import { ParkingService } from './parking.service';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {
    console.log('ini');
  }

  @Get()
  findAll(): Promise<Parking[]> {
    return this.parkingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Parking> {
    return this.parkingService.findOne(id);
  }

  @Post()
  create(@Body() parking: Parking): Promise<Parking> {
    return this.parkingService.create(parking);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.parkingService.remove(id);
  }
}
