import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1720026999943 implements MigrationInterface {
    name = 'Init1720026999943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vlille" ("objectid" SERIAL NOT NULL, "id" character varying NOT NULL, "nom" character varying NOT NULL, "adresse" character varying NOT NULL, "code_insee" character varying, "etat" character varying NOT NULL, "commune" character varying NOT NULL, "type" character varying NOT NULL, "nb_places_dispo" integer NOT NULL, "nb_velos_dispo" integer NOT NULL, "etat_connexion" character varying NOT NULL, "x" numeric(10,6) NOT NULL, "y" numeric(10,6) NOT NULL, "date_modification" character varying NOT NULL, CONSTRAINT "PK_6cf338448a4f998a2bbd1d0acf2" PRIMARY KEY ("objectid"))`);
        await queryRunner.query(`CREATE TABLE "parking" ("objectid" SERIAL NOT NULL, "id" character varying NOT NULL, "nom" character varying NOT NULL, "adresse" character varying NOT NULL, "code_insee" character varying, "etat" character varying NOT NULL, "ville" character varying NOT NULL, "txt_aff" character varying NOT NULL, "nbr_total" integer NOT NULL, "nbr_libre" integer NOT NULL, "longitude" numeric(10,6) NOT NULL, "latitude" numeric(10,6) NOT NULL, "dtdate" character varying NOT NULL, CONSTRAINT "PK_c1a53b81d59f31345eeb9a4ef17" PRIMARY KEY ("objectid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parking"`);
        await queryRunner.query(`DROP TABLE "vlille"`);
    }

}
