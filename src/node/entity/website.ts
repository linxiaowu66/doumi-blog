import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// 只会保存7天内的数据

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
  yesterdayPv: number;

  @Column('bigint')
  yesterdayUv: number;

  @Column('bigint')
  totalUv: number;

  @Column('bigint')
  totalPv: number;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: false
  })
  date: string;

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
