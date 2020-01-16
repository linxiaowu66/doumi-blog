import { Controller, Get, Post, Put, Query, Body, Session, Cookie ***REMOVED*** from '@malagu/mvc/lib/node';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { Article ***REMOVED*** from './entity/article';

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
  async createBlog(
    @Body() article: Article,
    @Session() session: any,
    @Cookie() cookie: any,
  ) {
    // const { category, tags, archiveTime ***REMOVED*** = article
    const repo = OrmContext.getRepository(Article);

    repo.create(article)
***REMOVED***

  // 更新博客内容
  @Put('/blog')
  async updateBlog() {

***REMOVED***
***REMOVED***
