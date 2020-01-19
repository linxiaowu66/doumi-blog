export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]>;
    fetchTagsList(): Promise<DouMiBlog.TagsItem[]>;
    fetchCatsList(): Promise<DouMiBlog.CategoryItem[]>;
    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
***REMOVED***

export namespace DouMiBlog {
  export interface HottestArticlItem {
    title: string,
    archiveTime: string,
    slug: string
***REMOVED***

  export interface TagsItem {
    id: number,
    name: string,
    articlesCount: number
***REMOVED***

  export interface CategoryItem {
    id: number,
    name: string,
    articlesCount: number
***REMOVED***

  export interface ArticleItem {
    id?: number;
    title: string;
    content: string;
    slug: string;
    digest: string;
    articleStatus: 'draft' | 'published';
    illustration: string;
    author: string;
    tags: string[];
    archiveTime: string;
    category: string;
***REMOVED***

  export interface RegisterParam {
    email: string,
    username: string,
    password: string
***REMOVED***

  export interface LoginParam {
    email: string,
    password: string
***REMOVED***
***REMOVED***
