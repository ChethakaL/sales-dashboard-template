import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Chart } from './chart.entity';

@Entity()
export class ChartSeries {
    @PrimaryGeneratedColumn() id: number;
    @ManyToOne(() => Chart, c => c.series, { onDelete: 'CASCADE' }) chart: Chart;
    @Column() name: string;
    @Column({ type: 'jsonb' }) data: number[];
    @Column({ type: 'int', default: 0 }) orderIndex: number;
}
