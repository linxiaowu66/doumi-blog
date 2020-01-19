import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, CreateDateColumn, UpdateDateColumn  } from 'typeorm';
import { Article } from './article';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
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
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
