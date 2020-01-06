import { DouMiBlog } from '../interface';
export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(): Promise<DouMiBlog.HottestArticlItem[]>;
}
