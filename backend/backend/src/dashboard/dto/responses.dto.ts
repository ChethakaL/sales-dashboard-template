import { ApiProperty } from '@nestjs/swagger';

export class MetricsKpiDto {
    @ApiProperty() label: string;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'number' }] }) value: string | number;
    @ApiProperty() delta: string;
    @ApiProperty({ enum: ['sales', 'order', 'product', 'customer'] }) kind: string;
}
export class MetricsResponseDto { @ApiProperty({ type: [MetricsKpiDto] }) kpis: MetricsKpiDto[]; }

export class TimeSeriesDto {
    @ApiProperty() name: string;
    @ApiProperty({ type: [Number] }) data: number[];
}
export class CategorizedSeriesResponseDto {
    @ApiProperty({ type: [TimeSeriesDto] }) series: TimeSeriesDto[];
    @ApiProperty({ type: [String] }) categories: string[];
}

export class TopProductDto {
    @ApiProperty() id: number;
    @ApiProperty() name: string;
    @ApiProperty() pct: number;
    @ApiProperty() color: string;
}
export class TopProductsResponseDto {
    @ApiProperty({ type: [TopProductDto] }) items: TopProductDto[];
}
