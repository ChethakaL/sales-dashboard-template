import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardModule } from './dashboard/dashboard.module';
import { Chart } from './dashboard/entities/chart.entity';
import { ChartSeries } from './dashboard/entities/chart-series.entity';
import { MetricKpi } from './dashboard/entities/metric-kpi.entity';
import { TopProduct } from './dashboard/entities/top-product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        ssl: process.env.DATABASE_URL?.includes('sslmode=require')
            ? { rejectUnauthorized: false }
            : false,
        autoLoadEntities: true,
        synchronize: false, // use migrations
        logging: ['error', 'warn'],
      }),
    }),
    TypeOrmModule.forFeature([Chart, ChartSeries, MetricKpi, TopProduct]),
    DashboardModule,
  ],
})
export class AppModule {}
