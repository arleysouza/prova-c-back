import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700262776205 implements MigrationInterface {
    name = 'Default1700262776205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "names" ("name" varchar(10) PRIMARY KEY NOT NULL, "count" integer NOT NULL DEFAULT (0))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "names"`);
    }

}
