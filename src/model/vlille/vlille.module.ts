import { Module } from '@nestjs/common';
import { VlilleController } from './vlille.controller';
import { VlilleService } from './vlille.service';
import { Vlille } from './vlille';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vlille])],
  controllers: [VlilleController],
  providers: [VlilleService],
})
export class VlilleModule {}
