export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]>;
    fetchTagsList(): Promise<DouMiBlog.TagsItem[]>;
    fetchCatsList(): Promise<DouMiBlog.CategoryItem[]>;
    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
}

export namespace DouMiBlog {
  export interface HottestArticlItem {
    title: string,
    archiveTime: string,
    slug: string
  }

  export interface TagsItem {
    id: number,
    name: string,
    articlesCount: number
  }

  export interface CategoryItem {
    id: number,
    name: string,
    articlesCount: number
  }

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
