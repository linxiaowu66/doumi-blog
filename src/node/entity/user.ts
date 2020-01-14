import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany ***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false
***REMOVED***)
  username: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  password: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  @Index({unique: true***REMOVED***)
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
***REMOVED***
