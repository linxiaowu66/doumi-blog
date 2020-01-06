export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    say(): Promise<string>;
}
