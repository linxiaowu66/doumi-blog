export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList>;
    fetchArticleList(currentPage: number): Promise<DouMiBlog.ArticleList>;
    fetchArticleDetail(slug: string): Promise<DouMiBlog.ArticleDetail>;
    fetchTagsList(): Promise<DouMiBlog.TagsItem[]>;
    fetchCatsList(): Promise<DouMiBlog.CategoryItem[]>;
    fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]>;
    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
***REMOVED***

export namespace DouMiBlog {
  export interface ArticleList {
    currentPage: number,
    list: ArticleBrief[],
    pageCount: number,
***REMOVED***
  export interface ArticleBrief {
    title: string,
    archiveTime: string,
    slug: string,
    illustration: string,
    digest: string
***REMOVED***

  interface PropertyItem {
    id: number,
    name: string,
    articlesCount: number
***REMOVED***

  export interface TagsItem extends PropertyItem {***REMOVED***

  export interface CategoryItem extends PropertyItem {***REMOVED***

  export interface ArchiveItem extends PropertyItem {
    archiveTime: string;
***REMOVED***

  export interface ArticleDetail {
    id?: number;
    title: string;
    content: string;
    slug: string;
    digest: string;
    pv: number;
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
