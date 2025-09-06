import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TopProduct {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;
    @Column('int') pct: number;
    @Column() color: string;
}
