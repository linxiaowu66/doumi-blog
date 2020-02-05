import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';
import { PasswordEncoder, Anonymous ***REMOVED*** from '@malagu/security/lib/node';
import { Autowired ***REMOVED*** from '@malagu/core';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { BlogServiceSymbol, BlogService ***REMOVED*** from './services';
import { User ***REMOVED*** from './entity/user';
import { Tag ***REMOVED*** from './entity/tag';
import { Category ***REMOVED*** from './entity/category';
import { Archive ***REMOVED*** from './entity/archive';
import { Schedule, DoumiSchedule ***REMOVED*** from './schedule';

const pick = require('lodash.pick');

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder

  @Autowired(BlogServiceSymbol)
  protected readonly blogService: BlogService;

  @Autowired(Schedule)
  protected readonly schedule: DoumiSchedule;

  @Transactional()
  async fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(1, limit, {
      pv: 'DESC'
  ***REMOVED***)

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime']))

    return Promise.resolve(result)
***REMOVED***

  // TODO: fix the pipeManager bug
  @Transactional()
  async fetchArticleList(currentPage: number, condition?: DouMiBlog.queryCondition): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(currentPage, 5, null, condition)

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(result)
***REMOVED***

  @Transactional()
  async fetchArticleDetail(slug: string): Promise<DouMiBlog.ArticleDetail> {
    const result = await this.blogService.fetchArticleDetail(slug)

    return Promise.resolve(result);
***REMOVED***

  @Transactional()
  async fetchTagsList(): Promise<DouMiBlog.TagsItem[]> {
    const repo = OrmContext.getRepository(Tag);

    const result = await repo.find({ relations: ["articles"]***REMOVED***

    const finalRes = result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***))

    return Promise.resolve(finalRes)
***REMOVED***
  @Transactional()
  async fetchCatsList(): Promise<DouMiBlog.CategoryItem[]> {
    const repo = OrmContext.getRepository(Category);

    const result = await repo.find({ relations: ["articles"]***REMOVED***

    const finalRes = result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***))

    return Promise.resolve(finalRes)
***REMOVED***

  @Transactional()
  async fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]> {
    const repo = OrmContext.getRepository(Archive);

    const result = await repo.find({ relations: ["articles"]***REMOVED***

    const finalRes = result.map(item => ({
      id: item.id,
      archiveTime: item.archiveTime,
      name: '', // fix lint error
      articlesCount: item.articles.length
  ***REMOVED***))

    return Promise.resolve(finalRes)
***REMOVED***

  @Transactional()
  async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
    const repo = OrmContext.getRepository(User)

    const pwd = await this.passwordEncoder.encode(param.password);

    await repo.save({ ...param, password: pwd ***REMOVED***
    return Promise.resolve('注册成功');
***REMOVED***
***REMOVED***
