import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  username!: string;

  @Column({ type: 'varchar', length: 300 })
  password!: string;
}
