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

const pick = require('lodash.pick');

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder

  @Autowired(BlogServiceSymbol)
  protected readonly blogService: BlogService;

  @Transactional()
  async fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(1, limit, {
      pv: 'DESC'
  ***REMOVED***)

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime']))

    return Promise.resolve(result)
***REMOVED***

  async fetchArticleList(currentPage: number): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(currentPage)

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(result)
***REMOVED***

  async fetchArticleDetail(slug: string): Promise<DouMiBlog.ArticleDetail> {
    const result = await this.blogService.fetchArticleDetail(slug)

    return Promise.resolve(result);
***REMOVED***

  @Transactional()
  async fetchTagsList(queryTag?: string): Promise<DouMiBlog.TagsItem[] | DouMiBlog.ArticleList> {
    const repo = OrmContext.getRepository(Tag);

    const query = queryTag ? {
      where: { name: queryTag ***REMOVED***,
      relations: ["articles"]
  ***REMOVED*** : {
      relations: ["articles"]
  ***REMOVED***

    const result = await repo.find(query);

    const finalRes = result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***))

    const list = result[0].articles.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(queryTag ? {list, currentPage: 1, pageCount: 1***REMOVED*** : finalRes)
***REMOVED***
  @Transactional()
  async fetchCatsList(queryCat?: string): Promise<DouMiBlog.ArticleList | DouMiBlog.CategoryItem[]> {
    const repo = OrmContext.getRepository(Category);

    const query = queryCat ? {
      where: { name: queryCat ***REMOVED***,
      relations: ["articles"]
  ***REMOVED*** : {
      relations: ["articles"]
  ***REMOVED***
    const result = await repo.find(query);

    const finalRes = result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***))

    const list = result[0].articles.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(queryCat ? {list, currentPage: 1, pageCount: 1***REMOVED*** : finalRes)
***REMOVED***

  @Transactional()
  async fetchArchsList(queryArch?: string): Promise<DouMiBlog.ArchiveItem[] | DouMiBlog.ArticleList> {
    const repo = OrmContext.getRepository(Archive);

    const query = queryArch ? {
      where: { name: queryArch ***REMOVED***,
      relations: ["articles"]
  ***REMOVED*** : {
      relations: ["articles"]
  ***REMOVED***
    const result = await repo.find(query);

    // TODO: 这里做分页能实现吗？

    const finalRes = result.map(item => ({
      id: item.id,
      archiveTime: item.archiveTime,
      name: '', // fix lint error
      articlesCount: item.articles.length
  ***REMOVED***))

    const list = result[0].articles.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(queryArch ? {list, currentPage: 1, pageCount: 1***REMOVED*** : finalRes)
***REMOVED***

  @Transactional()
  async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
    const repo = OrmContext.getRepository(User)

    const pwd = await this.passwordEncoder.encode(param.password);

    await repo.save({ ...param, password: pwd ***REMOVED***
    return Promise.resolve('注册成功');
***REMOVED***
***REMOVED***
