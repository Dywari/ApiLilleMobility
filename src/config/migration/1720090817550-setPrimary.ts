import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPrimary1720090817550 implements MigrationInterface {
    name = 'SetPrimary1720090817550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_6cf338448a4f998a2bbd1d0acf2"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305" PRIMARY KEY ("objectid", "id")`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_c1a53b81d59f31345eeb9a4ef17"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_91552ce6fb84d95de4b513c7305" PRIMARY KEY ("objectid", "id")`);
        await queryRunner.query(`ALTER TABLE "vlille" ALTER COLUMN "objectid" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "vlille_objectid_seq"`);
        await queryRunner.query(`ALTER TABLE "parking" ALTER COLUMN "objectid" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "parking_objectid_seq"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "UQ_5e344cfbe239f55e27fbb78e305" UNIQUE ("objectid", "id")`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "UQ_91552ce6fb84d95de4b513c7305" UNIQUE ("objectid", "id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "UQ_91552ce6fb84d95de4b513c7305"`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "UQ_5e344cfbe239f55e27fbb78e305"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "parking_objectid_seq" OWNED BY "parking"."objectid"`);
        await queryRunner.query(`ALTER TABLE "parking" ALTER COLUMN "objectid" SET DEFAULT nextval('"parking_objectid_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "vlille_objectid_seq" OWNED BY "vlille"."objectid"`);
        await queryRunner.query(`ALTER TABLE "vlille" ALTER COLUMN "objectid" SET DEFAULT nextval('"vlille_objectid_seq"')`);
        await queryRunner.query(`ALTER TABLE "parking" DROP CONSTRAINT "PK_91552ce6fb84d95de4b513c7305"`);
        await queryRunner.query(`ALTER TABLE "parking" ADD CONSTRAINT "PK_c1a53b81d59f31345eeb9a4ef17" PRIMARY KEY ("objectid")`);
        await queryRunner.query(`ALTER TABLE "vlille" DROP CONSTRAINT "PK_5e344cfbe239f55e27fbb78e305"`);
        await queryRunner.query(`ALTER TABLE "vlille" ADD CONSTRAINT "PK_6cf338448a4f998a2bbd1d0acf2" PRIMARY KEY ("objectid")`);
    }

}
