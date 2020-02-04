import { Controller, Get, Post, Put, Query, Body, Session } from '@malagu/mvc/lib/node';
// import slug from 'limax';
import {In} from "typeorm";
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { Article, ArticleStatus } from './entity/article';
import { Tag } from './entity/tag';
import { Category } from './entity/category';
import { Archive } from './entity/archive';
import { User } from './entity/user';
import { DouMiBlog } from '../common/blog-protocol';

// 以下api都是需要身份校验
@Controller('/api')
export class blogAdminController {

  // 获取博客列表
  @Transactional()
  @Get('/blog/list')
  async fetchBlogList(
    @Query('currentPage') currentPage:number,
    ) {
    const repo = OrmContext.getRepository(Article);

    const [list, allArticles] = await Promise.all([repo.find({
      order: {
        createdAt: 'DESC'
      },
      take: 5,
      skip: (currentPage - 1) * 5, // think this needs to be page * limit
      relations: ['tags', 'archiveTime', 'category', 'author']
    }), repo.find()])

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.archiveTime.archiveTime,
      author: item.author.username
    })), pageCount: Math.ceil(allArticles.length / 5), currentPage}
  }

  // 获取博客详情
  @Transactional()
  // @Catch()
  @Get('blog/detail')
  async fetchBlogDetail(
    @Query('slug') slug: string
  ) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.findOne({ slug }, { relations: ['tags', 'archiveTime', 'category', 'author'] })

    if (!result) {
      throw new Error('找不到对应文章')
    }

    return {
      ...result,
      tags: result.tags.map(it => it.name),
      category: result.category.name,
      archiveTime: result.archiveTime.archiveTime,
      author: result.author.username
    }
  }

  // 新建博客
  @Post('/blog')
  @Transactional()
  async createBlog(
    @Body() article: DouMiBlog.ArticleDetail,
    @Session() session: any,
  ) {
    const { tags, category, archiveTime } = article;
    const userInfo = session['malagu:securityContext'].authentication.principal;
    const { username } = userInfo

    const tagRepo = OrmContext.getRepository(Tag);
    const catRepo = OrmContext.getRepository(Category);
    const archiveRepo = OrmContext.getRepository(Archive);
    const userRepo = OrmContext.getRepository(User);

    const loadTags = await tagRepo.find({ name: In(tags)})
    const loadCat = await catRepo.find({ name: category});
    const loadUser = await userRepo.find({ email: username });
    let loadArch = await archiveRepo.findOne({ archiveTime })

    if (!loadArch) {
      loadArch = new Archive()
      loadArch.archiveTime = archiveTime

      await archiveRepo.save(loadArch);
    }

    const articleIns = new Article()
    articleIns.archiveTime = loadArch;
    articleIns.tags = loadTags;
    articleIns.slug = Date.now().toString(); // slug(article.title);
    articleIns.category = loadCat[0];
    articleIns.articleStatus = article.articleStatus as ArticleStatus;
    articleIns.content = article.content;
    articleIns.digest = article.digest;
    articleIns.illustration = article.illustration;
    articleIns.title = article.title;
    articleIns.author = loadUser[0];
    articleIns.pv = 0;

    const repo = OrmContext.getRepository(Article);

    await repo.save(articleIns)

    return { status: 1, data: article.articleStatus === 'draft' ? '保存草稿成功' : '发布成功'};
  }

  // 更新博客内容
  @Put('/blog')
  @Transactional()
  async updateBlog(
    @Body() article: DouMiBlog.ArticleDetail,
    @Session() session: any,
  ) {
    const { tags, category, archiveTime } = article;
    const userInfo = session['malagu:securityContext'].authentication.principal;
    const { username } = userInfo

    const tagRepo = OrmContext.getRepository(Tag);
    const catRepo = OrmContext.getRepository(Category);
    const archiveRepo = OrmContext.getRepository(Archive);
    const userRepo = OrmContext.getRepository(User);

    const loadTags = await tagRepo.find({ name: In(tags)})
    const loadCat = await catRepo.find({ name: category});
    const loadUser = await userRepo.find({ email: username });
    let loadArch = await archiveRepo.findOne({ archiveTime })

    if (!loadArch) {
      loadArch = new Archive()
      loadArch.archiveTime = archiveTime

      await archiveRepo.save(loadArch);
    }

    const articleIns = new Article()
    articleIns.archiveTime = loadArch;
    articleIns.tags = loadTags;
    articleIns.category = loadCat[0];
    articleIns.articleStatus = article.articleStatus as ArticleStatus;
    articleIns.content = article.content;
    articleIns.digest = article.digest;
    articleIns.illustration = article.illustration;
    articleIns.title = article.title;
    articleIns.author = loadUser[0];

    const repo = OrmContext.getRepository(Article);

    await repo.update({ slug: article.slug }, articleIns)

    return { status: 1, data: article.articleStatus === 'draft' ? '更新草稿成功' : '发布成功'};
  }
}
