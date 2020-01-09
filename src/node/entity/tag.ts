import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, JoinTable } from 'typeorm';
import { Article } from './article';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  @Index({unique: true})
  name: string;

  // 一个tag可以包含多篇文章，所以这里是多对多的关系
  @ManyToMany(type => Article, article => article.tags, { cascade: true })
  @JoinTable({
    name: 'article_tags',
    joinColumn: { name: 'tid' },
    inverseJoinColumn: { name: 'aid' },
  })
  articles: Article[];
}
