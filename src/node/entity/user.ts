import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany ***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  username: string;

  @Column('string')
  password: string;

  @Column('string')
  @Index({unique: true***REMOVED***)
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
***REMOVED***
