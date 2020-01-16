export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]>;

    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
}

export namespace DouMiBlog {
  export interface HottestArticlItem {
    title: string,
    archiveTime: string,
    slug: string
  }

  export interface RegisterParam {
    email: string,
    username: string,
    password: string
  }

  export interface LoginParam {
    email: string,
    password: string
  }
}
