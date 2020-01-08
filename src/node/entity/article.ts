import { Entity, ObjectIdColumn, Column, ObjectID ***REMOVED*** from 'typeorm';
// import { User ***REMOVED*** from './user';


export enum ArticleStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
***REMOVED***

@Entity()
export class Article {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({
      type: 'string',
  ***REMOVED***)
    title: string;

    @Column({
      type: 'string',
  ***REMOVED***)
    content: string;

    @Column({
      type: 'string',
  ***REMOVED***)
    previewText: string;

    @Column({
      type: 'string',
  ***REMOVED***)
    slug: string;

    @Column({
      type: 'string',
  ***REMOVED***)
    digest: string;

    @Column({
      type: "enum",
      enum: ArticleStatus,
      default: ArticleStatus.DRAFT
  ***REMOVED***)
    articleStatus: ArticleStatus;

    // 当天访问本文的IP，每天清零一次
    @Column({
      type: 'simple-array'
  ***REMOVED***)
    pageViews: string[];

    @Column({
      type: 'string',
  ***REMOVED***)
    author: string;

    // 文章首页图片
    @Column({
      type: 'string',
  ***REMOVED***)
    picture: string;

    @Column({
      type: 'simple-array'
  ***REMOVED***)
    tagsArray: string[];

    @Column({
      type: 'string'
  ***REMOVED***)
    archiveTime: string;
***REMOVED***
