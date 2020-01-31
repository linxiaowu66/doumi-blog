import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';
import { Tag } from './tag';
import { Archive } from './archive';
import { Category } from './category';


export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

@Entity()
export class Article {

  @PrimaryGeneratedColumn()
  id: number;

  // 文章标题
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  @Index({unique: true})
  title: string;

  // 文章阅读量
  @Column('bigint')
  pv: number;

  // 博文主体，markdown格式
  @Column('longtext')
  content: string;

  // 博文链接
  @Column('varchar')
  @Index({unique: true})
  slug: string;

  // 博文摘要，这次需要自己填写，不再自动从文章采集字符了，那样实现不准确
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  digest: string;

  // 博文状态,默认草稿中
  @Column({
    type: "enum",
    enum: ArticleStatus,
    default: ArticleStatus.DRAFT
  })
  articleStatus: ArticleStatus;

  // 文章首页图片链接
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
  })
  illustration: string;

  // 文章作者
  @ManyToOne(type => User, user => user.articles)
  author: User;

  // 一篇文章可以包含多个tag，所以这里是多对多的关系
  @ManyToMany(type => Tag, tag => tag.articles)
  @JoinTable({
    name: 'article_tags',
    joinColumn: { name: 'aid' },
    inverseJoinColumn: { name: 'tid' },
  })
  tags: Tag[];

  // 文章的归档时间
  @ManyToOne(type => Archive, archive => archive.articles)
  archiveTime: Archive;

  // 文章的分类
  @ManyToOne(type => Category, category => category.articles)
  category: Category;

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
}
