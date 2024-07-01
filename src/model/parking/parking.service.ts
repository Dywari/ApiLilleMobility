import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parking } from './parking';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class ParkingService {
  constructor(
    @InjectRepository(Parking)
    private parkingRepository: Repository<Parking>,
    private readonly httpService: HttpService
  ) { }

  findAll(): Promise<Parking[]> {
    // return this.parkingRepository.find();
    return this.getParkingFromOpenData();
  }

  findOne(id: string): Promise<Parking> {
    return this.parkingRepository.findOne({ where: { id } });
  }

  create(parking: Parking): Promise<Parking> {
    return this.parkingRepository.save(parking);
  }

  private getParkingFromOpenData(): Promise<Parking[]> {
    return this.httpService.get('https://data.lillemetropole.fr/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=mel_mobilite_et_transport%3Aparking&OUTPUTFORMAT=application%2Fjson')
      .pipe(
        map((response) => {
          const parkings = Parking.JsonToObjects(response.data.features);
          return parkings;
          //todo un truc
        }),
        catchError((error) => {
          throw new Error(error);
          //todo errror
        })
      ).toPromise();
  }

  async remove(id: string): Promise<void> {
    await this.parkingRepository.delete(id);
  }
}
