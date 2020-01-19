import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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
  name: string;

  @OneToMany(type => Article, article => article.category)
  articles: Article[]

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
