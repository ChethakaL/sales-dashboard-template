import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Chart } from './entities/chart.entity';
import { ChartSeries } from './entities/chart-series.entity';
import { MetricKpi } from './entities/metric-kpi.entity';
import { TopProduct } from './entities/top-product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Chart, ChartSeries, MetricKpi, TopProduct])],
    controllers: [DashboardController],
    providers: [DashboardService],
})
export class DashboardModule {}
