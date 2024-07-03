import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { plainToInstance } from 'class-transformer';

@Entity()
export class Parking extends BaseEntity {
  @Column({ nullable: true })
  ville: string;

  @Column()
  txt_aff: string;

  @Column()
  nbr_total: number;

  @Column()
  nbr_libre: number;

  public static JsonToObjects(json: any): Parking[] {
    return plainToInstance(Parking, json) as unknown as Parking[];
  }

  public static JsonToObject(json: any): Parking {
    return plainToInstance(Parking, json);
  }

}
