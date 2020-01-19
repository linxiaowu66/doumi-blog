import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, CreateDateColumn, UpdateDateColumn ***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class Archive {
  @PrimaryGeneratedColumn()
  id: number;

  // 归档时间，诸如'2010-01'这样的字符
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  archiveTime: string;

  @OneToMany(type => Article, article => article.archiveTime)
  articles: Article[]

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
