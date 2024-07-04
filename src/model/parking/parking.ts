import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { plainToInstance } from 'class-transformer';

@Entity()
export class Parking extends BaseEntity {
  @Column()
  ville: string;

  @Column()
  txt_aff: string;

  @Column()
  nbr_total: number;

  @Column()
  nbr_libre: number;

  @Column('decimal', { precision: 10, scale: 6 })
  longitude: number;

  @Column('decimal', { precision: 10, scale: 6 })
  latitude: number;

  @Column()
  dtdate: string;

  public static JsonToObjects(json: any): Parking[] {
    return plainToInstance(Parking, json) as unknown as Parking[];
  }

  public static JsonToObject(json: any): Parking {
    return plainToInstance(Parking, json);
  }

}
