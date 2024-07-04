import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
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
    return this.parkingRepository.find().then((parkings) => {
      if (parkings.length === 0 || this.checkIfneedRefresh(parkings[0])) {
        return this.getAndSaveParkingsFromOpenData();
      } else {
        return parkings;
      }
    })

  }

  findOne(id: string): Promise<Parking> {
    return this.parkingRepository.findOne({ where: { id } });
  }

  create(parking: Parking): Promise<Parking> {
    return this.parkingRepository.save(parking);
  }

  createUpdateEntities(parking: Parking[]): Promise<InsertResult> {
    return this.parkingRepository.upsert(parking, ['id']);
  }

  private checkIfneedRefresh(parking: Parking): boolean {
    if (parking) {
      console.log(new Date(parking.dtdate));
      console.log(new Date());
      const updatedAtM = new Date(parking.dtdate).getTime();
      const currentDateM = new Date().getTime() + (120 * 60000);
      console.log('needRefresh', Math.abs(currentDateM - updatedAtM) > 300000);
      return Math.abs(currentDateM - updatedAtM) > 300000;
    }
    return true;
  }

  private getAndSaveParkingsFromOpenData(): Promise<Parking[]> {
    return this.httpService.get('https://data.lillemetropole.fr/data/ogcapi/collections/parking/items?f=json&limit=-1')
      .pipe(
        map((response) => {
          const parkings = Parking.JsonToObjects(response.data.records);
          this.createUpdateEntities(parkings).then((v) => {
            console.log(v);
          });
          return parkings;
        }),
        catchError((error) => {
          throw new Error(error);
        })
      ).toPromise();
  }

  async remove(id: string): Promise<void> {
    await this.parkingRepository.delete(id);
  }
}
