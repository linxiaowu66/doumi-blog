import { Reader ***REMOVED*** from './../entity/reader';
import { Website ***REMOVED*** from './../entity/website';
import { Component ***REMOVED*** from '@malagu/core';
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


export const BlogServiceSymbol = Symbol('BlogService');

const PAGE_SIZE = 5;

@Component(BlogServiceSymbol)
export class BlogService {

  @Transactional()
  async fetchArticleList(currentPage = 1, pageSize = 5, order?: any, condition?: DouMiBlog.queryCondition) {
    const repo = OrmContext.getRepository(Article);

    const baseQuery = {
      order: order ? order : {
        createdAt: 'DESC'
    ***REMOVED***,
      take: pageSize? pageSize : PAGE_SIZE,
      skip: (currentPage - 1) * (pageSize ? pageSize : PAGE_SIZE), // think this needs to be page * limit
      relations: ['tags', 'archiveTime', 'category', 'author']
  ***REMOVED***

    let whereQuery = {***REMOVED***

    if (condition) {
      if (condition.queryTag) {
        whereQuery = {
          tags: In([condition.queryTag])
      ***REMOVED***
    ***REMOVED*** else if (condition.queryCat) {
        whereQuery = {
          where: { category: condition.queryCat ***REMOVED***
      ***REMOVED***
    ***REMOVED*** else if (condition.queryArch) {
        whereQuery = {
          where: { archiveTime: condition.queryArch ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***

    if (currentPage === 1) {
      await this.updateWebsiteStatistics()
  ***REMOVED***

    const [list, allArticles] = await Promise.all([repo.find({...baseQuery, ...whereQuery***REMOVED***), repo.find(whereQuery)])

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.fullArchiveTime,
      author: item.author.username
  ***REMOVED***)), pageCount: Math.ceil(allArticles.length / (pageSize ? pageSize : PAGE_SIZE)), currentPage***REMOVED***
***REMOVED***

  @Transactional()
  async fetchArticleDetail(slug: string, shouldBeUpdateStats = false) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.findOne({ slug ***REMOVED***, { relations: ['tags', 'archiveTime', 'category', 'author'] ***REMOVED***)

    if (!result) {
      throw new Error('找不到对应文章')
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

    const loadTags = await tagRepo.find({ name: In(tags)***REMOVED***)
    const loadCat = await catRepo.find({ name: category***REMOVED***
    const loadUser = await userRepo.find({ email: username ***REMOVED***
    let loadArch = await archiveRepo.findOne({ archiveTime: archiveTime.substr(0, 7) ***REMOVED***)

    if (!loadArch) {
      loadArch = new Archive()
      loadArch.archiveTime = archiveTime.substr(0, 7)

      await archiveRepo.save(loadArch);
  ***REMOVED***
    console.log('>>>', loadArch, loadCat, loadTags)

    const articleIns = new Article()
    articleIns.archiveTime = loadArch;
    articleIns.fullArchiveTime = archiveTime;
    articleIns.tags = loadTags;
    articleIns.category = loadCat[0];
    articleIns.articleStatus = article.articleStatus as ArticleStatus;
    articleIns.content = article.content;
    articleIns.digest = article.digest;
    articleIns.illustration = article.illustration;
    articleIns.title = article.title;
    articleIns.author = loadUser[0];

    console.log('****', isUpdate)
    if (!isUpdate) {
      articleIns.slug = Date.now().toString();
      articleIns.pv = 0;
  ***REMOVED***

    const repo = OrmContext.getRepository(Article);

    let result
    if (!isUpdate) {
      result = await repo.save(articleIns)
  ***REMOVED*** else {
      result = await repo.update({ slug: article.slug ***REMOVED***, articleIns)
  ***REMOVED***
    return result
***REMOVED***
  @Transactional()
  async updateArticleStatictics(slug: string) {
    let reqIp: string
    if (Context.getRequest().headers['x-real-ip']) {
      reqIp = Context.getRequest().headers['x-real-ip'] as string
  ***REMOVED*** else {
      reqIp = (Context.getRequest() as any).ip
  ***REMOVED***

    const now = AwesomeHelp.convertDate(new Date(), 'YYYY-MM-DD');

    const readerRepo = OrmContext.getRepository(Reader)

    const reader = await readerRepo.findOne({
      where: { date: now, articleSlug: slug ***REMOVED***
  ***REMOVED***)

    if (reader) {
      if (!reader.ips.includes(reqIp)) {
        reader.ips.push(reqIp)
        readerRepo.save(reader)
    ***REMOVED***
  ***REMOVED*** else {
      const newReader = new Reader()
      newReader.articleSlug = slug;
      newReader.date = now;
      newReader.ips = [reqIp];
      readerRepo.save(newReader);
  ***REMOVED***

    await this.updateWebsiteStatistics();
***REMOVED***

  @Transactional()
  async fetchTagsListWithArticle() {
    const repo = OrmContext.getRepository(Tag);

    const result = await repo.find({ relations: ["articles"]***REMOVED***

    return result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***))
***REMOVED***

  @Transactional()
  async fetchArchListWithArticle() {
    const repo = OrmContext.getRepository(Archive);

    const result = await repo.find({ relations: ["articles"]***REMOVED***

    return result.map(item => ({
      id: item.id,
      archiveTime: item.archiveTime,
      name: '', // fix lint error
      articlesCount: item.articles.length
  ***REMOVED***))
***REMOVED***

  @Transactional()
  async fetchCatListWithArticle() {
    const repo = OrmContext.getRepository(Category);

    const result = await repo.find({ relations: ["articles"]***REMOVED***

    return result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
  ***REMOVED***))
***REMOVED***
  @Transactional()
  async updateWebsiteStatistics() {
    let reqIp: string
    if (Context.getRequest().headers['x-real-ip']) {
      reqIp = Context.getRequest().headers['x-real-ip'] as string
  ***REMOVED*** else {
      reqIp = (Context.getRequest() as any).ip
  ***REMOVED***

    if (!reqIp) {
      console.log('[blogService]: can not get client ip, ignore it!')
      return
  ***REMOVED***

    // const now = AwesomeHelp.convertDate(new Date(), 'YYYY-MM-DD');

    const repo = OrmContext.getRepository(Website)

    const website = await repo.findOne({id: 1***REMOVED***)

    if (website) {
      if (!website.todayIps.includes(reqIp)) {
        website.todayIps.push(reqIp)
        website.todayPv = +website.todayPv + 1
        website.todayUv = +website.todayUv + 1
        website.totalPv = +website.totalPv + 1
        website.totalUv = +website.totalUv + 1
    ***REMOVED*** else {
        website.totalPv = +website.totalPv + 1
        website.todayPv = +website.todayPv + 1
    ***REMOVED***
      repo.save(website)
  ***REMOVED*** else {
      const newData = new Website()
      newData.todayIps = [reqIp];
      newData.todayPv = 1
      newData.todayUv = 1;
      newData.totalPv = 1
      newData.totalUv = 1;
      repo.save(newData)
  ***REMOVED***
***REMOVED***
  @Transactional()
  async clearTodayIpsArray() {
    const repo = OrmContext.getRepository(Website);

    const data = await repo.findOne({ id: 1***REMOVED***)

    if (data) {
      data.todayIps = []
      repo.save(data);
  ***REMOVED***
***REMOVED***
***REMOVED***
