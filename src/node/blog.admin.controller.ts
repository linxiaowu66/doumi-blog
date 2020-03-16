import { Controller, Post, Put, Body ***REMOVED*** from '@malagu/mvc/lib/node';
import { Autowired ***REMOVED*** from '@malagu/core';
import { Transactional ***REMOVED*** from '@malagu/typeorm/lib/node';
import { DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { BlogServiceSymbol, BlogService ***REMOVED*** from './services/blog.service';
import { Article ***REMOVED*** from './entity/article';
import { SecurityContext ***REMOVED*** from '@malagu/security/lib/node';

// 以下api都是需要身份校验
@Controller('/api')
export class BlogAdminController {

  @Autowired(BlogServiceSymbol)
  protected readonly blogService: BlogService;

  // 新建博客
  @Post('/blog')
  @Transactional()
  async createBlog(
  @Body() article: DouMiBlog.ArticleDetail,
  ) {
    const userInfo = SecurityContext.getAuthentication().principal;
    const { username ***REMOVED*** = userInfo;

    const result = await this.blogService.createOrUpdateArticle(article, username);

    return { status: 1, data: {
      msg: article.articleStatus === 'draft' ? '保存草稿成功' : '发布成功',
      slug: (result as Article).slug
  ***REMOVED******REMOVED***
***REMOVED***

  // 更新博客内容
  @Put('/blog')
  @Transactional()
  async updateBlog(
  @Body() article: DouMiBlog.ArticleDetail,
  ) {
    const userInfo = SecurityContext.getAuthentication().principal;
    const { username ***REMOVED*** = userInfo;

    await this.blogService.createOrUpdateArticle(article, username, true);

    return { status: 1, data: {
      msg: article.articleStatus === 'draft' ? '更新草稿成功' : '更新发布成功'
  ***REMOVED******REMOVED***
***REMOVED***
***REMOVED***
