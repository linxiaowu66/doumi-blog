import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Article } from './article';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  @Index({unique: true})
  name: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
}
