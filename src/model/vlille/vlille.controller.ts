import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { VlilleService } from './vlille.service';
import { Vlille } from './vlille';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('vlille')
@UseGuards(JwtAuthGuard)
export class VlilleController {
  constructor(private readonly vlilleService: VlilleService) { }

  @Get()
  findAll(): Promise<Vlille[]> {
    return this.vlilleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Vlille> {
    return this.vlilleService.findOne(id);
  }

  @Post()
  create(@Body() stationVlille: Vlille): Promise<Vlille> {
    return this.vlilleService.create(stationVlille);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.vlilleService.remove(id);
  }
}
