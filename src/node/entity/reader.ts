import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn ***REMOVED*** from 'typeorm';

@Entity()
export class Reader {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  articleSlug: string;

  @Column('string')
  date: string; // 存储每一篇文章阅读的时间

  @Column('simple-array')
  ips: string[]; // 存储每一篇文章阅读的读者的ip，等价于uv

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
