import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany ***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  @Index({unique: true***REMOVED***)
  name: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
***REMOVED***
