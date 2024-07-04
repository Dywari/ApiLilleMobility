import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vlille } from './vlille';
import { InsertResult, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class VlilleService {
  constructor(
    @InjectRepository(Vlille)
    private stationVlilleRepository: Repository<Vlille>,
    private readonly httpService: HttpService
  ) { }

  findAll(): Promise<Vlille[]> {
    return this.stationVlilleRepository.createQueryBuilder('vlille').where('vlille.etat_connexion = :connecte', { connecte: 'CONNECTÉ' }).getMany().then((vlilles) => {
      if (vlilles.length === 0 || this.checkIfneedRefresh(vlilles[0])) {
        return this.getAndSaveVlilleFromOpenData();
      } else {
        return vlilles;
      }
    })
  }

  private checkIfneedRefresh(vlille: Vlille): boolean {
    if (vlille) {
      const updatedAtM = new Date(vlille.date_modification).getTime();
      const currentDateM = new Date().getTime() + (120 * 60000);
      console.log('needRefresh', Math.abs(currentDateM - updatedAtM) > 300000);
      return Math.abs(currentDateM - updatedAtM) > 300000;
    }
    return true;
  }

  private getAndSaveVlilleFromOpenData(): Promise<Vlille[]> {
    return this.httpService.get('https://data.lillemetropole.fr/data/ogcapi/collections/vlille_temps_reel/items?f=json&limit=-1')
      .pipe(
        map((response) => {
          const vlilles = Vlille.JsonToObjects(response.data.records);
          this.createUpdateEntities(vlilles);
          return vlilles;
        }),
        catchError((error) => {
          throw new Error(error);
        })
      ).toPromise();
  }

  findOne(id: string): Promise<Vlille> {
    return this.stationVlilleRepository.findOne({ where: { id } });
  }

  create(stationVlille: Vlille): Promise<Vlille> {
    return this.stationVlilleRepository.save(stationVlille);
  }

  createUpdateEntities(stationVlille: Vlille[]): Promise<InsertResult> {
    return this.stationVlilleRepository.upsert(stationVlille, ['id']);
  }

  async remove(id: string): Promise<void> {
    await this.stationVlilleRepository.delete(id);
  }
}
