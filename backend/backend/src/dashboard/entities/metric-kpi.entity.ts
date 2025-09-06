import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

export type KpiKind = 'sales' | 'order' | 'product' | 'customer';

@Entity()
export class MetricKpi {
    @PrimaryGeneratedColumn() id: number;
    @Column() label: string;
    @Column({ nullable: true }) valueText?: string;
    @Column({ type: 'float', nullable: true }) valueNum?: number;
    @Column() delta: string;
    @Index() @Column() kind: KpiKind;
}
