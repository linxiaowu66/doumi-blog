import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Website {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  todayUv: number;

  @Column('simple-array')
  todayIps: string[];

  @Column('bigint')
  todayPv: number;

  @Column('bigint')
  totalUv: number;

  @Column('bigint')
  totalPv: number;

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
