import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany ***REMOVED*** from 'typeorm';
import { Article ***REMOVED*** from './article';

@Entity()
export class Archive {
  @PrimaryGeneratedColumn()
  id: number;

  // 归档时间，诸如'2010-01'这样的字符
  @Column('string')
  @Index({unique: true***REMOVED***)
  archiveTime: string;

  @OneToMany(type => Article, article => article.author)
  articles: Article[]
***REMOVED***
