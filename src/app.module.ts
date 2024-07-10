import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './model/user/user.module';
import { ParkingModule } from './model/parking/parking.module';
import { VlilleModule } from './model/vlille/vlille.module';
import { AuthModule } from './model/auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), UserModule, ParkingModule, VlilleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
