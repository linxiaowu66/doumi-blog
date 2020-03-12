import { Reader ***REMOVED*** from './../entity/reader';
import { Component, Autowired ***REMOVED*** from '@malagu/core';
import { Context ***REMOVED*** from '@malagu/web/lib/node';
import { AwesomeHelp ***REMOVED*** from 'awesome-js';
import { In ***REMOVED*** from 'typeorm';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { Article, ArticleStatus ***REMOVED*** from '../entity/article';
import { Tag ***REMOVED*** from '../entity/tag';
import { Category ***REMOVED*** from '../entity/category';
import { Archive ***REMOVED*** from '../entity/archive';
import { User ***REMOVED*** from '../entity/user';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';
import { WebsiteServiceSymbol, WebsiteService ***REMOVED*** from './website.service';


export const BlogServiceSymbol = Symbol('BlogService');

@Component(BlogServiceSymbol)
export class BlogService {

  @Autowired(WebsiteServiceSymbol)
  protected readonly websiteService: WebsiteService;

  @Transactional()
  async fetchArticleList(currentPage = 1, pageSize = 20, order?: any, condition?: DouMiBlog.QueryCondition) {
    const repo = OrmContext.getRepository(Article);

    const baseQuery = {
      order: order ? order : {
        createdAt: 'DESC'
    ***REMOVED***,
      take: pageSize,
      skip: (currentPage - 1) * pageSize, // think this needs to be page * limit
      relations: ['tags', 'archiveTime', 'category', 'author']
    ***REMOVED***

    let whereQuery = {***REMOVED***
    let list: Article[] = [];
    let count = 0;

    if (currentPage === 1) {
      await this.websiteService.updateWebsiteStatistics();
  ***REMOVED***

    if (condition) {
      if (condition.queryTag) {
        // 多对多的关系比较特殊，find不能不满足需求
        let orderField = 'article.createdAt';
        let orderDef: 'ASC' | 'DESC' = 'DESC';
        if (order) {
          // 排序字段仅支持1个字段
          Object.keys(order).forEach(item => {
            orderField = `article.${item***REMOVED***`;
            orderDef = order[item];
          ***REMOVED***
      ***REMOVED***
        const queryBuilder = repo.createQueryBuilder('article');
        if (condition.articleStatus) {
          queryBuilder.where('article.articleStatus = :status', { status: condition.articleStatus ***REMOVED***
      ***REMOVED***
        [list, count] = await queryBuilder
          .innerJoin('article.tags', 'tag', 'tag.id IN (:...tagId)', { tagId: condition.queryTag ***REMOVED***)
          .skip((currentPage - 1) * pageSize)
          .take(pageSize)
          .orderBy(orderField, orderDef)
          .innerJoinAndSelect('article.tags', 'tags')
          .innerJoinAndSelect('article.category', 'category')
          .innerJoinAndSelect('article.archiveTime', 'archiveTime')
          .innerJoinAndSelect('article.author', 'author')
          .getManyAndCount();
    ***REMOVED*** else if (condition.queryCat) {
        whereQuery = {
          where: { category: condition.queryCat ***REMOVED***
        ***REMOVED***
    ***REMOVED*** else if (condition.queryArch) {
        whereQuery = {
          where: { archiveTime: condition.queryArch ***REMOVED***
        ***REMOVED***
    ***REMOVED***
      if (condition.articleStatus) {
        whereQuery = {
          ...whereQuery,
          ...{ where: { articleStatus: condition.articleStatus ***REMOVED******REMOVED***
        ***REMOVED***
    ***REMOVED***
  ***REMOVED***

    if (!condition?.queryTag) {
      [list, count] = await repo.findAndCount({...baseQuery, ...whereQuery***REMOVED***
  ***REMOVED***

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.fullArchiveTime,
      author: item.author.username
  ***REMOVED***)), pageCount: Math.ceil(count / pageSize), currentPage***REMOVED***
***REMOVED***

  @Transactional()
  async fetchArticleDetail(slug: string, shouldBeUpdateStats = false) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.findOne({ slug ***REMOVED***, { relations: ['tags', 'archiveTime', 'category', 'author'] ***REMOVED***

    if (!result) {
      throw new Error('找不到对应文章');
  ***REMOVED***

    if (shouldBeUpdateStats) {
      await this.updateArticleStatictics(slug);
  ***REMOVED***

    // 对该文章的pv数自增1
    result.pv = +result.pv + 1;

    await repo.save(result);

    return {
      ...result,
      tags: result.tags.map(it => it.name),
      category: result.category.name,
      catId: result.category.id,
      archiveTime: result.fullArchiveTime,
      author: result.author.username
    ***REMOVED***
***REMOVED***

  @Transactional()
  async createOrUpdateArticle(article: DouMiBlog.ArticleDetail, username: string, isUpdate = false) {
    const { tags, category, archiveTime ***REMOVED*** = article;

    const tagRepo = OrmContext.getRepository(Tag);
    const catRepo = OrmContext.getRepository(Category);
    const archiveRepo = OrmContext.getRepository(Archive);
    const userRepo = OrmContext.getRepository(User);

    const loadTags = await tagRepo.find({ name: In(tags)***REMOVED***
    const loadCat = await catRepo.find({ name: category***REMOVED***
    const loadUser = await userRepo.find({ email: username ***REMOVED***
    let loadArch = await archiveRepo.findOne({ archiveTime: archiveTime.substr(0, 7) ***REMOVED***
    const repo = OrmContext.getRepository(Article);

    if (!loadArch) {
      loadArch = new Archive();
      loadArch.archiveTime = archiveTime.substr(0, 7);

      await archiveRepo.save(loadArch);
  ***REMOVED***

    let articleIns;
    if (!isUpdate) {
      articleIns = new Article();
  ***REMOVED*** else {
      articleIns = await repo.findOne({slug: article.slug***REMOVED***

      if (!articleIns) {
        throw new Error('对应博文不存在，请重新确认');
    ***REMOVED***
  ***REMOVED***
    articleIns.archiveTime = loadArch;
    articleIns.fullArchiveTime = archiveTime;
    articleIns.tags = loadTags;
    articleIns.category = loadCat[0];
    articleIns.articleStatus = article.articleStatus as ArticleStatus;
    articleIns.content = article.content.replace(/http:\/\/blogimages2016/g, 'https://blogimages2016');
    articleIns.digest = article.digest;
    articleIns.illustration = article.illustration.replace(/http:\/\//, 'https://');
    articleIns.title = article.title;
    articleIns.author = loadUser[0];

    if (!isUpdate) {
      articleIns.slug = Date.now().toString();
      articleIns.pv = 0;
  ***REMOVED*** else {
      articleIns.slug = article.slug;
  ***REMOVED***

    const result = await repo.save(articleIns);

    // 这里不能用update!https://github.com/typeorm/typeorm/issues/4197
    // if (!isUpdate) {
    // result = await repo.save(articleIns)
    // ***REMOVED*** else {
    //   result = await repo.update({ slug: article.slug ***REMOVED***, articleIns)
    // ***REMOVED***
    return result;
***REMOVED***
  @Transactional()
  async updateArticleStatictics(slug: string) {
    let reqIp: string;
    if (Context.getRequest().headers['x-real-ip']) {
      reqIp = Context.getRequest().headers['x-real-ip'] as string;
  ***REMOVED*** else {
      reqIp = (Context.getRequest() as any).ip;
  ***REMOVED***

    const now = AwesomeHelp.convertDate(new Date(), 'YYYY-MM-DD');

    const readerRepo = OrmContext.getRepository(Reader);

    // 现根据日期查找，如果没有任何该日期的条目，就表示需要删除7天之外的数据
    const hasTodayItems = await readerRepo.find({ date: now ***REMOVED***

    if (!hasTodayItems.length) {
      const beyond7Days = new Date().getTime() - 7 * 24 * 3600 * 1000;
      const results = await readerRepo.find({ date: AwesomeHelp.convertDate(new Date(beyond7Days), 'YYYY-MM-DD') ***REMOVED***
      await readerRepo.delete(results.map(it => it.id));
  ***REMOVED***

    const reader = await readerRepo.findOne({
      where: { date: now, articleSlug: slug ***REMOVED***
    ***REMOVED***

    if (reader) {
      if (!reader.ips.includes(reqIp)) {
        reader.ips.push(reqIp);
        readerRepo.save(reader);
    ***REMOVED***
  ***REMOVED*** else {
      const newReader = new Reader();
      newReader.articleSlug = slug;
      newReader.date = now;
      newReader.ips = [reqIp];
      readerRepo.save(newReader);
  ***REMOVED***

    await this.websiteService.updateWebsiteStatistics();
***REMOVED***

  @Transactional()
  async fetchTagsListWithArticle() {
    const repo = OrmContext.getRepository(Tag);

    const result = await repo.find({ relations: ['articles']***REMOVED***

    return result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***));
***REMOVED***

  @Transactional()
  async fetchArchListWithArticle() {
    const repo = OrmContext.getRepository(Archive);

    const result = await repo.find({ relations: ['articles']***REMOVED***

    return result.map(item => ({
      id: item.id,
      archiveTime: item.archiveTime,
      name: '', // fix lint error
      articlesCount: item.articles.length
  ***REMOVED***)).sort((a, b) => new Date(b.archiveTime).getTime() - new Date(a.archiveTime).getTime());
***REMOVED***

  @Transactional()
  async fetchCatListWithArticle() {
    const repo = OrmContext.getRepository(Category);

    const result = await repo.find({ relations: ['articles']***REMOVED***

    return result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***));
***REMOVED***

  @Transactional()
  async searchArticleByKeyword(keyword: string) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.createQueryBuilder('article')
      .where('article.title like :title', { title: `%${keyword***REMOVED***%`***REMOVED***)
      .orWhere('article.content like :content', { content: `%${keyword***REMOVED***%`***REMOVED***)
      .getMany();

    return result;
***REMOVED***
  /**
   * 查询最近最热门的文章，最多可查7天
  */
  @Transactional()
  async fetchHottestArticleRecently() {
    const readerRepo = OrmContext.getRepository(Reader);
    const reader = await readerRepo.find();

    const result: {slug: string, count: number***REMOVED***[] = [];

    reader.forEach((item: Reader) => {
      const index = result.findIndex(it => it.slug === item.articleSlug);
      if (index) {
        result[index].count = result[index].count + item.ips.length;
    ***REMOVED*** else {
        result[index].count = item.ips.length;
    ***REMOVED***
    ***REMOVED***

    // 取出排名前10的文章
    const sortResult = result.sort((a, b) => a.count - b.count).slice(0, 9);

    const articleRepo = OrmContext.getRepository(Article);

    const articles = await Promise.all(sortResult.map(it => articleRepo.findOne({ slug: it.slug***REMOVED***)));

    const finalRes = sortResult.map((item, idx) => ({ ...item, name: articles[idx]!.title***REMOVED***));

    return finalRes;
***REMOVED***
***REMOVED***
