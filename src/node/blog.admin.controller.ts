import { Controller, Get, Post, Put, Query, Body, Session, Cookie ***REMOVED*** from '@malagu/mvc/lib/node';
// import slug from 'limax';
import {In***REMOVED*** from "typeorm";
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { Article, ArticleStatus ***REMOVED*** from './entity/article';
import { Tag ***REMOVED*** from './entity/tag';
import { Category ***REMOVED*** from './entity/category';
import { Archive ***REMOVED*** from './entity/archive';
import { User ***REMOVED*** from './entity/user';
import { DouMiBlog ***REMOVED*** from '../common/blog-protocol';

// 以下api都是需要身份校验
@Controller('/api')
export class blogAdminController {

  // 获取博客列表
  @Transactional()
  @Get('/blog/list')
  async fetchBlogList(
    @Query('currentPage') currentPage:number,
    @Session() session: any,
    ) {
    console.log(session['malagu:securityContext'].authentication.principal)
    const repo = OrmContext.getRepository(Article);

    const result = await repo.find({
      take: 20,
      skip: currentPage, // think this needs to be page * limit
  ***REMOVED***)

    return { list: result, pageCount: 1, currentPage: 1***REMOVED***
***REMOVED***

  // 获取博客详情
  @Transactional()
  @Get('blog/detail')
  async fetchBlogDetail(
    @Query('slug') slug: string
  ) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.findOne({ slug ***REMOVED***)

    return result
***REMOVED***

  // 新建博客
  @Post('/blog')
  @Transactional()
  async createBlog(
    @Body() article: DouMiBlog.ArticleItem,
    @Session() session: any,
    @Cookie() cookie: any,
  ) {
    console.log('>>>>>', article)
    const { tags, category, archiveTime ***REMOVED*** = article;
    const userInfo = session['malagu:securityContext'].authentication.principal;
    const { username ***REMOVED*** = userInfo

    const tagRepo = OrmContext.getRepository(Tag);
    const catRepo = OrmContext.getRepository(Category);
    const archiveRepo = OrmContext.getRepository(Archive);
    const userRepo = OrmContext.getRepository(User);

    const loadTags = await tagRepo.find({ name: In(tags)***REMOVED***)
    const loadCat = await catRepo.find({ name: category***REMOVED***
    const loadUser = await userRepo.find({ email: username ***REMOVED***
    const instance = new Archive()
    instance.archiveTime = archiveTime

    await archiveRepo.save(instance);

    const articleIns = new Article()
    articleIns.archiveTime = instance;
    articleIns.tags = loadTags;
    articleIns.slug = Date.now().toString(); // slug(article.title);
    articleIns.category = loadCat[0];
    articleIns.articleStatus = article.articleStatus as ArticleStatus;
    articleIns.content = article.content;
    articleIns.digest = article.digest;
    articleIns.illustration = article.illustration;
    articleIns.title = article.title;
    articleIns.author = loadUser[0];

    const repo = OrmContext.getRepository(Article);

    await repo.save(articleIns)

    return { status: 1, data: '新建博文成功'***REMOVED***
***REMOVED***

  // 更新博客内容
  @Put('/blog')
  async updateBlog() {

***REMOVED***
***REMOVED***
