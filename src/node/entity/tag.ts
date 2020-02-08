import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn, Index  } from 'typeorm';
import { Article } from './article';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  @Index({ unique: true })
  name: string;

  // 一个tag可以包含多篇文章，所以这里是多对多的关系
  @ManyToMany(type => Article, article => article.tags, { cascade: true })
  articles: Article[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
