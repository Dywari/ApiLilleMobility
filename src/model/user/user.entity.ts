import { Entity, Column } from 'typeorm';
import { BaseEntity } from './../base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  username!: string;

  @Column({ type: 'varchar', length: 300 })
  password!: string;
}
