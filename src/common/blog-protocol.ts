export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]>;

    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
***REMOVED***

export namespace DouMiBlog {
  export interface HottestArticlItem {
    title: string,
    archiveTime: string,
    slug: string
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
