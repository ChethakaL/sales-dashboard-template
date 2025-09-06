import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1710000000000 implements MigrationInterface {
    name = 'Init1710000000000';
    public async up(q: QueryRunner): Promise<void> {
        await q.query(`CREATE TABLE "metric_kpi" (
      "id" SERIAL PRIMARY KEY,
      "label" varchar NOT NULL,
      "valueText" varchar,
      "valueNum" double precision,
      "delta" varchar NOT NULL,
      "kind" varchar NOT NULL
    )`);
        await q.query(`CREATE TABLE "chart" (
      "id" SERIAL PRIMARY KEY,
      "slug" varchar UNIQUE NOT NULL,
      "categories" jsonb NOT NULL
    )`);
        await q.query(`CREATE TABLE "chart_series" (
      "id" SERIAL PRIMARY KEY,
      "name" varchar NOT NULL,
      "data" jsonb NOT NULL,
      "orderIndex" integer NOT NULL DEFAULT 0,
      "chartId" integer,
      CONSTRAINT "fk_chart" FOREIGN KEY ("chartId") REFERENCES "chart"("id") ON DELETE CASCADE
    )`);
        await q.query(`CREATE TABLE "top_product" (
      "id" SERIAL PRIMARY KEY,
      "name" varchar NOT NULL,
      "pct" integer NOT NULL,
      "color" varchar NOT NULL
    )`);
    }
    public async down(q: QueryRunner): Promise<void> {
        await q.query(`DROP TABLE IF EXISTS "chart_series"`);
        await q.query(`DROP TABLE IF EXISTS "chart"`);
        await q.query(`DROP TABLE IF EXISTS "metric_kpi"`);
        await q.query(`DROP TABLE IF EXISTS "top_product"`);
    }
}
