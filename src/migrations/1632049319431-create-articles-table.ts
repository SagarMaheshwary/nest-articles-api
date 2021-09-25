import { MigrationInterface, QueryRunner } from 'typeorm';

export class createArticlesTable1632049319431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.articles (
        id BIGSERIAL PRIMARY KEY,
        title VARCHAR(250) NOT NULL,
        body text NOT NULL,
        user_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NULL,
        CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
      )
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS articles`);
  }
}
