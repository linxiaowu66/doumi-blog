import { DouMiBlog ***REMOVED*** from '../interface';
export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]>;

    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
***REMOVED***
