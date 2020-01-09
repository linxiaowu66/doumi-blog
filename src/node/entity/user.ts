import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Article } from './article';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  username: string;

  @Column('string')
  password: string;

  @Column('string')
  @Index({unique: true})
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
}
