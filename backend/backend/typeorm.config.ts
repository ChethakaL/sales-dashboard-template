import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Chart } from './src/dashboard/entities/chart.entity';
import { ChartSeries } from './src/dashboard/entities/chart-series.entity';
import { MetricKpi } from './src/dashboard/entities/metric-kpi.entity';
import { TopProduct } from './src/dashboard/entities/top-product.entity';
import { Init1710000000000 } from './src/migrations/1710000000000-Init';

export default new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('sslmode=require') ? { rejectUnauthorized: false } : false,
    entities: [Chart, ChartSeries, MetricKpi, TopProduct],
    migrations: [Init1710000000000],
    logging: false,
});
