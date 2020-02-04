import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, Index***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  @Index({ unique: true ***REMOVED***)
  name: string;

  // 一个tag可以包含多篇文章，所以这里是多对多的关系
  @ManyToMany(type => Article, article => article.tags, { cascade: true ***REMOVED***)
  @JoinTable({
    name: 'article_tags',
    joinColumn: { name: 'tid' ***REMOVED***,
    inverseJoinColumn: { name: 'aid' ***REMOVED***,
***REMOVED***)
  articles: Article[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
