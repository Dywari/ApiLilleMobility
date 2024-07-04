import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPrimary21720091127027 implements MigrationInterface {
    name = 'SetPrimary21720091127027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "UQ_5e344cfbe239f55e27fbb78e305"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "UQ_91552ce6fb84d95de4b513c7305"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_2a179cf41641c7388fec45de2aa" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP COLUMN "objectid"`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_91552ce6fb84d95de4b513c7305"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_d611d86b1d39963d048b05976aa" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "parking" DROP COLUMN "objectid"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "UQ_d611d86b1d39963d048b05976aa" UNIQUE ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "UQ_d611d86b1d39963d048b05976aa"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD "objectid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_d611d86b1d39963d048b05976aa"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_91552ce6fb84d95de4b513c7305" PRIMARY KEY ("objectid", "id")`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD "objectid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_2a179cf41641c7388fec45de2aa"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305" PRIMARY KEY ("objectid", "id")`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "UQ_91552ce6fb84d95de4b513c7305" UNIQUE ("objectid", "id")`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "UQ_5e344cfbe239f55e27fbb78e305" UNIQUE ("objectid", "id")`);
    }

}
