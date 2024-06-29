import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base.entity';

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
}
