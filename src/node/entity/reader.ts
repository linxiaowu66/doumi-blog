import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn ***REMOVED*** from 'typeorm';

@Entity()
export class Reader {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  articleSlug: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  date: string; // 存储每一篇文章阅读的时间

  @Column('simple-array')
  ips: string[]; // 存储每一篇文章阅读的读者的ip，等价于uv

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
