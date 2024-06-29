import { MigrationInterface, QueryRunner } from "typeorm";

export class InitVLilleParking1719670585837 implements MigrationInterface {
    name = 'InitVLilleParking1719670585837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vlille" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "commune" character varying NOT NULL, "type" character varying NOT NULL, "nb_places_dispo" integer NOT NULL, "nb_velos_dispo" integer NOT NULL, "etat_connexion" character varying NOT NULL, "x" numeric(10,6) NOT NULL, "y" numeric(10,6) NOT NULL, "date_modification" TIMESTAMP NOT NULL, CONSTRAINT "PK_2a179cf41641c7388fec45de2aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "ville" character varying NOT NULL, "txt_aff" character varying NOT NULL, "nbr_total" integer NOT NULL, "nbr_libre" integer NOT NULL, CONSTRAINT "PK_d611d86b1d39963d048b05976aa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parking"`);
        await queryRunner.query(`DROP TABLE "vlille"`);
    }

}
