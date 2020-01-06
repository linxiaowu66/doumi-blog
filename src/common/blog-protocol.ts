import { DouMiBlog ***REMOVED*** from '../interface';
export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(): Promise<DouMiBlog.HottestArticlItem[]>;
***REMOVED***
