import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, CreateDateColumn, UpdateDateColumn ***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  name: string;

  @OneToMany(type => Article, article => article.category)
  articles: Article[]

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
