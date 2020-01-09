import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Article } from './article';

@Entity()
export class Archive {
  @PrimaryGeneratedColumn()
  id: number;

  // 归档时间，诸如'2010-01'这样的字符
  @Column('string')
  @Index({unique: true})
  archiveTime: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
}
