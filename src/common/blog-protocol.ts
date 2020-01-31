export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
    fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList>;
    fetchArticleList(currentPage: number): Promise<DouMiBlog.ArticleList>;
    fetchTagsList(): Promise<DouMiBlog.TagsItem[]>;
    fetchCatsList(): Promise<DouMiBlog.CategoryItem[]>;
    fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]>;
    registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
}

export namespace DouMiBlog {
  export interface ArticleList {
    currentPage: number,
    list: ArticleBrief[],
    pageCount: number,
  }
  export interface ArticleBrief {
    title: string,
    archiveTime: string,
    slug: string,
    illustration: string,
    digest: string
  }

  interface PropertyItem {
    id: number,
    name: string,
    articlesCount: number
  }

  export interface TagsItem extends PropertyItem {}

  export interface CategoryItem extends PropertyItem {}

  export interface ArchiveItem extends PropertyItem {
    archiveTime: string;
  }

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
