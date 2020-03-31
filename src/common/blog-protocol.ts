export const BlogServer = Symbol('BlogServer');

export interface BlogServer {
  fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList>;
  fetchArticleList(currentPage: number, condition?: DouMiBlog.QueryCondition): Promise<DouMiBlog.ArticleList>;
  findArticlesByKeyword(keyword: string): Promise<DouMiBlog.ArticleBrief[]>
  fetchArticleDetail(slug: string, shouldBeUpdateStats?: boolean): Promise<DouMiBlog.ArticleDetail>;
  fetchTagsList(): Promise<DouMiBlog.TagsItem[]>;
  fetchCatsList(): Promise<DouMiBlog.CategoryItem[]>;
  fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]>;
  fetchWebsiteChangeLog(): Promise<DouMiBlog.ChangeLog[]>
  fetchWebsiteStatistics(): Promise<DouMiBlog.WebsiteStatsItem[]>;
  fetchSummaryStats(): Promise<DouMiBlog.SummaryStats>;
  fetchHottestArticleLast7Days(): Promise<DouMiBlog.ArticleStatsItem[]>;
  registerUser(param: DouMiBlog.RegisterParam): Promise<string>;
}

export namespace DouMiBlog {
  export interface SummaryStats{
    operationDays: string,
    totalPv: number | string,
    articleCount: number,
    articlesWordsNum: string | number,
    commentsNum: number,
    [key: string]: any
  }
  export interface ChangeLog {
    title: string,
    desc1: string,
    desc2: string,
    date: string,
    time: string
  }
  export interface WebsiteStatsItem {
    date: string,
    todayUv: number,
    todayPv: number,
    totalUv: number,
    totalPv: number,
    pvGrowthRate: number,
    uvGrowthRate: number
  }

  export interface ArticleStatsItem {
    slug: string,
    name: string,
    count: number
  }
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
    tags: string[],
    category: string,
    digest: string,
    articleStatus: 'draft' | 'published',
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
    catId: number;
  }

  export interface QueryCondition {
    queryTag?: number,
    queryCat?: number,
    queryArch?: number,
    [key: string]: any
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
