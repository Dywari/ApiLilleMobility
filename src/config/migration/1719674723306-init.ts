import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1719674723306 implements MigrationInterface {
    name = 'Init1719674723306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "createDateTime"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "lastChangedDateTime"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "createDateTime"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "lastChangedDateTime"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "objectid" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_2a179cf41641c7388fec45de2aa"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305" PRIMARY KEY ("id", "objectid")`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "nom" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "adresse" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "code_insee" character varying`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "etat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "longitude" numeric(10,6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "latitude" numeric(10,6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "dtdate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "objectid" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_d611d86b1d39963d048b05976aa"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_91552ce6fb84d95de4b513c7305" PRIMARY KEY ("id", "objectid")`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "nom" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "adresse" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "code_insee" character varying`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "etat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "longitude" numeric(10,6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "latitude" numeric(10,6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "dtdate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_6cf338448a4f998a2bbd1d0acf2" PRIMARY KEY ("objectid")`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_91552ce6fb84d95de4b513c7305"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_c1a53b81d59f31345eeb9a4ef17" PRIMARY KEY ("objectid")`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_c1a53b81d59f31345eeb9a4ef17"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_91552ce6fb84d95de4b513c7305" PRIMARY KEY ("id", "objectid")`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_6cf338448a4f998a2bbd1d0acf2"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305" PRIMARY KEY ("id", "objectid")`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "dtdate"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "etat"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "code_insee"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "adresse"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "nom"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_91552ce6fb84d95de4b513c7305"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_d611d86b1d39963d048b05976aa" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "objectid"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "dtdate"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "etat"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "code_insee"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "adresse"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "nom"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_2a179cf41641c7388fec45de2aa" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "objectid"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

}
