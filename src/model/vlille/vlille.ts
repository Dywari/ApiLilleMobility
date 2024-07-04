import { plainToInstance } from 'class-transformer';
import { BaseEntity } from '../base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Vlille extends BaseEntity {
  @Column()
  commune: string;

  @Column()
  type: string;

  @Column()
  nb_places_dispo: number;

  @Column()
  nb_velos_dispo: number;

  @Column()
  etat_connexion: string;

  @Column('decimal', { precision: 10, scale: 6 })
  x: number;

  @Column('decimal', { precision: 10, scale: 6 })
  y: number;

  @Column()
  date_modification: string;


  public static JsonToObjects(json: any): Vlille[] {
    return plainToInstance(Vlille, json) as unknown as Vlille[];
  }

  public static JsonToObject(json: any): Vlille {
    return plainToInstance(Vlille, json);
  }
}
