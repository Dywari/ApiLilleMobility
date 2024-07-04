import { PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Column } from 'typeorm';

@Unique(['id'])
export abstract class BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column({ nullable: true })
  code_insee: string;

  @Column()
  etat: string;

}
