import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, Index, CreateDateColumn, UpdateDateColumn ***REMOVED*** from 'typeorm';
import { User ***REMOVED*** from './user';
import { Tag ***REMOVED*** from './tag';
import { Archive ***REMOVED*** from './archive';
import { Category ***REMOVED*** from './category';


export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
***REMOVED***

@Entity()
export class Article {

  @PrimaryGeneratedColumn()
  id: number;

  // 文章标题
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  @Index({unique: true***REMOVED***)
  title: string;

  // 文章阅读量
  @Column('bigint')
  pv: number;

  // 博文主体，markdown格式
  @Column('longtext')
  content: string;

  // 博文链接
  @Column('varchar')
  @Index({unique: true***REMOVED***)
  slug: string;

  // 博文摘要，这次需要自己填写，不再自动从文章采集字符了，那样实现不准确
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  digest: string;

  // 博文状态,默认草稿中
  @Column({
    type: "enum",
    enum: ArticleStatus,
    default: ArticleStatus.DRAFT
***REMOVED***)
  articleStatus: ArticleStatus;

  // 文章首页图片链接
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  illustration: string;

  // 文章作者
  @ManyToOne(type => User, user => user.articles)
  author: User;

  // 一篇文章可以包含多个tag，所以这里是多对多的关系
  @ManyToMany(type => Tag, tag => tag.articles)
  @JoinTable({
    name: 'article_tags',
    joinColumn: { name: 'aid' ***REMOVED***,
    inverseJoinColumn: { name: 'tid' ***REMOVED***,
***REMOVED***)
  tags: Tag[];

  // 以日为单位
  @Column({
    type: "varchar",
    length: 200,
    nullable: false
***REMOVED***)
  fullArchiveTime: string;

  // 文章的归档时间, 月份为单位
  @ManyToOne(type => Archive, archive => archive.articles)
  archiveTime: Archive;

  // 文章的分类
  @ManyToOne(type => Category, category => category.articles)
  category: Category;

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;
***REMOVED***
