import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  objectid: number;

  @Column()
  id: string;

  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column({ nullable: true })
  code_insee: string;

  @Column()
  etat: string;

  @Column('decimal', { precision: 10, scale: 6 })
  longitude: number;

  @Column('decimal', { precision: 10, scale: 6 })
  latitude: number;

  @Column()
  dtdate: Date;
}
