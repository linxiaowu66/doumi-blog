import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';
import { Anonymous ***REMOVED*** from '@malagu/security/lib/node';
import { Autowired, Logger ***REMOVED*** from '@malagu/core';
import { BlogServiceSymbol, BlogService ***REMOVED*** from './services';
import { AuthServiceSymbol, AuthService ***REMOVED*** from './services/auth.service';
import { WebsiteServiceSymbol, WebsiteService ***REMOVED*** from './services/website.service';
import { WinstonLogger ***REMOVED*** from 'malagu-winston';


const pick = require('lodash.pick');

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(AuthServiceSymbol)
  protected readonly authService: AuthService;

  @Autowired(BlogServiceSymbol)
  protected readonly blogService: BlogService;

  @Autowired(WebsiteServiceSymbol)
  protected readonly websiteService: WebsiteService;

  @Autowired(Logger)
  protected readonly logger: WinstonLogger;

  async fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList> {
    this.logger.info(`fetch hottest articles with limit[${limit***REMOVED***]`);
    const result = await this.blogService.fetchArticleList(1, limit, {
      pv: 'DESC'
    ***REMOVED***

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime']));

    this.logger.info(`hottest articles result: ${JSON.stringify(result)***REMOVED***`);
    return Promise.resolve(result);
***REMOVED***

  async fetchArticleList(currentPage: number, condition?: DouMiBlog.QueryCondition): Promise<DouMiBlog.ArticleList> {
    this.logger.info(`fetchArticleList with currentPage[${currentPage***REMOVED***], condition[${JSON.stringify(condition)***REMOVED***]`);
    const result = await this.blogService.fetchArticleList(currentPage, 20, undefined, condition);

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration', 'author', 'tags', 'category', 'articleStatus']));

    return Promise.resolve(result);
***REMOVED***

  async fetchArticleDetail(slug: string, shouldBeUpdateStats = false): Promise<DouMiBlog.ArticleDetail> {
    const result = await this.blogService.fetchArticleDetail(slug, shouldBeUpdateStats);

    return Promise.resolve(result);
***REMOVED***

  async findArticlesByKeyword(keyword: string): Promise<DouMiBlog.ArticleBrief[]> {
    const result = await this.blogService.searchArticleByKeyword(keyword);

    const list = result.map(item => pick(item, ['title', 'slug']));

    return Promise.resolve(list);
***REMOVED***

  async fetchTagsList(): Promise<DouMiBlog.TagsItem[]> {
    const result = await this.blogService.fetchTagsListWithArticle();

    return Promise.resolve(result);
***REMOVED***
  async fetchCatsList(): Promise<DouMiBlog.CategoryItem[]> {
    const result = await this.blogService.fetchCatListWithArticle();

    return Promise.resolve(result);
***REMOVED***

  async fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]> {
    const result = await this.blogService.fetchArchListWithArticle();

    return Promise.resolve(result);
***REMOVED***

  async fetchWebsiteChangeLog() {
    const result = await this.websiteService.websiteChangeLog();

    return Promise.resolve(result.reverse());
***REMOVED***

  async fetchWebsiteStatistics() {
    const result = await this.websiteService.fetchWebsiteStatistics();

    return Promise.resolve(result);
***REMOVED***

  async fetchHottestArticleLast7Days() {
    const result = await this.blogService.fetchHottestArticleRecently();

    return Promise.resolve(result);
***REMOVED***

  async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
    await this.authService.registerUser(param);
    return Promise.resolve('注册成功');
***REMOVED***
***REMOVED***
