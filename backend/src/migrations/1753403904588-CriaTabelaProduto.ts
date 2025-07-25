import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriaTabelaProduto1753403904588 implements MigrationInterface {
    name = 'CriaTabelaProduto1753403904588';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "produtos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "preco" numeric(10,2) NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "produtos"`);
    }
}
