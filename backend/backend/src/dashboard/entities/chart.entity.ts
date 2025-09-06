import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Index } from 'typeorm';
import { ChartSeries } from './chart-series.entity';

@Entity()
export class Chart {
    @PrimaryGeneratedColumn() id: number;
    @Index({ unique: true }) @Column() slug: string; // 'revenue' | 'csat' | 'visitors'
    @Column({ type: 'jsonb' }) categories: string[];
    @OneToMany(() => ChartSeries, s => s.chart, { cascade: true }) series: ChartSeries[];
}
