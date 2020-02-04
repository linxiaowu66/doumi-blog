import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, Index  } from 'typeorm';
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
  @Index({ unique: true })
  email: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
