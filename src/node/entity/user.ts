import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Article } from './article';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  username: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  password: string;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  @Index({unique: true})
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
}
