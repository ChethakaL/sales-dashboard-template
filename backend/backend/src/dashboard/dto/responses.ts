import { ApiProperty } from '@nestjs/swagger';

export class MetricsKpi {
    @ApiProperty() label: string;
    @ApiProperty() value: string | number;
    @ApiProperty() delta: string; // e.g. "+8% from yesterday"
    @ApiProperty() kind: 'sales' | 'order' | 'product' | 'customer';
}

export class MetricsResponse {
    @ApiProperty({ type: [MetricsKpi] }) kpis: MetricsKpi[];
}

export class TimeSeries {
    @ApiProperty() name: string;
    @ApiProperty({ type: [Number] }) data: number[];
}

export class CategorizedSeriesResponse {
    @ApiProperty({ type: [TimeSeries] }) series: TimeSeries[];
    @ApiProperty({ type: [String] }) categories: string[];
}

export class TopProduct {
    @ApiProperty() id: number;
    @ApiProperty() name: string;
    @ApiProperty() pct: number;
    @ApiProperty() color: string;
}

export class TopProductsResponse {
    @ApiProperty({ type: [TopProduct] }) items: TopProduct[];
}
