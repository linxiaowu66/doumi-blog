import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';
// import { User } from './user';


export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

@Entity()
export class Article {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({
      type: 'string',
    })
    title: string;

    @Column({
      type: 'string',
    })
    content: string;

    @Column({
      type: 'string',
    })
    previewText: string;

    @Column({
      type: 'string',
    })
    slug: string;

    @Column({
      type: 'string',
    })
    digest: string;

    @Column({
      type: "enum",
      enum: ArticleStatus,
      default: ArticleStatus.DRAFT
    })
    articleStatus: ArticleStatus;

    // 当天访问本文的IP，每天清零一次
    @Column({
      type: 'simple-array'
    })
    pageViews: string[];

    @Column({
      type: 'string',
    })
    author: string;

    // 文章首页图片
    @Column({
      type: 'string',
    })
    picture: string;

    @Column({
      type: 'simple-array'
    })
    tagsArray: string[];

    @Column({
      type: 'string'
    })
    archiveTime: string;
}
