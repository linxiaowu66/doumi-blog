import { Reader } from './../entity/reader';
import { Component, Autowired } from '@malagu/core';
import { Context } from '@malagu/web/lib/node';
import { AwesomeHelp } from 'awesome-js';
import { In } from 'typeorm';
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { Article, ArticleStatus } from '../entity/article';
import { Tag } from '../entity/tag';
import { Category } from '../entity/category';
import { Archive } from '../entity/archive';
import { User } from '../entity/user';
import { DouMiBlog } from '../../common/blog-protocol';
import { WebsiteServiceSymbol, WebsiteService } from './website.service';


export const BlogServiceSymbol = Symbol('BlogService');

const PAGE_SIZE = 5;

@Component(BlogServiceSymbol)
export class BlogService {

  @Autowired(WebsiteServiceSymbol)
  protected readonly websiteService: WebsiteService;

  @Transactional()
  async fetchArticleList(currentPage = 1, pageSize = 5, order?: any, condition?: DouMiBlog.queryCondition) {
    const repo = OrmContext.getRepository(Article);

    const baseQuery = {
      order: order ? order : {
        createdAt: 'DESC'
      },
      take: pageSize? pageSize : PAGE_SIZE,
      skip: (currentPage - 1) * (pageSize ? pageSize : PAGE_SIZE), // think this needs to be page * limit
      relations: ['tags', 'archiveTime', 'category', 'author']
    }

    let whereQuery = {}
    let list: Article[] = []
    let count = 0;

    if (currentPage === 1) {
      await this.websiteService.updateWebsiteStatistics()
    }

    if (condition) {
      if (condition.queryTag) {
        // 多对多的关系比较特殊，find不能不满足需求
        let orderField = 'article.createdAt';
        let orderDef: "ASC" | "DESC" = 'DESC';
        if (order) {
          // 排序字段仅支持1个字段
          Object.keys(order).forEach(item => {
            orderField = `article.${item}`
            orderDef = order[item]
          })
        }
        [list, count] = await repo.createQueryBuilder('article')
        .innerJoin('article.tags', 'tag', 'tag.id IN (:...tagId)', { tagId: condition.queryTag })
        .skip((currentPage - 1) * (pageSize ? pageSize : PAGE_SIZE))
        .take(pageSize? pageSize : PAGE_SIZE)
        .orderBy(orderField, orderDef)
        .innerJoinAndSelect('article.tags', 'tags')
        .innerJoinAndSelect('article.category', 'category')
        .innerJoinAndSelect('article.archiveTime', 'archiveTime')
        .innerJoinAndSelect('article.author', 'author')
        .getManyAndCount()
      } else if (condition.queryCat) {
        whereQuery = {
          where: { category: condition.queryCat }
        }
      } else if (condition.queryArch) {
        whereQuery = {
          where: { archiveTime: condition.queryArch }
        }
      }
    }

    if (!condition?.queryTag) {
      [list, count] = await repo.findAndCount({...baseQuery, ...whereQuery})
    }

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.fullArchiveTime,
      author: item.author.username
    })), pageCount: Math.ceil(count / (pageSize ? pageSize : PAGE_SIZE)), currentPage}
  }

  @Transactional()
  async fetchArticleDetail(slug: string, shouldBeUpdateStats = false) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.findOne({ slug }, { relations: ['tags', 'archiveTime', 'category', 'author'] })

    if (!result) {
      throw new Error('找不到对应文章')
    }

    if (shouldBeUpdateStats) {
      await this.updateArticleStatictics(slug);
    }

    // 对该文章的pv数自增1
    result.pv = +result.pv + 1;

    await repo.save(result);

    return {
      ...result,
      tags: result.tags.map(it => it.name),
      category: result.category.name,
      archiveTime: result.fullArchiveTime,
      author: result.author.username
    }
  }

  @Transactional()
  async createOrUpdateArticle(article: DouMiBlog.ArticleDetail, username: string, isUpdate = false) {
    const { tags, category, archiveTime } = article;

    const tagRepo = OrmContext.getRepository(Tag);
    const catRepo = OrmContext.getRepository(Category);
    const archiveRepo = OrmContext.getRepository(Archive);
    const userRepo = OrmContext.getRepository(User);

    const loadTags = await tagRepo.find({ name: In(tags)})
    const loadCat = await catRepo.find({ name: category});
    const loadUser = await userRepo.find({ email: username });
    let loadArch = await archiveRepo.findOne({ archiveTime: archiveTime.substr(0, 7) })
    const repo = OrmContext.getRepository(Article);

    if (!loadArch) {
      loadArch = new Archive()
      loadArch.archiveTime = archiveTime.substr(0, 7)

      await archiveRepo.save(loadArch);
    }

    let articleIns
    if (!isUpdate) {
      articleIns = new Article()
    } else {
      articleIns = await repo.findOne({slug: article.slug});

      if (!articleIns) {
        throw new Error('对应博文不存在，请重新确认');
      }
    }
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

    if (!isUpdate) {
      articleIns.slug = Date.now().toString();
      articleIns.pv = 0;
    } else {
      articleIns.slug = article.slug;
    }

    const result = await repo.save(articleIns)

    // 这里不能用update!https://github.com/typeorm/typeorm/issues/4197
    // if (!isUpdate) {
      // result = await repo.save(articleIns)
    // } else {
    //   result = await repo.update({ slug: article.slug }, articleIns)
    // }
    return result
  }
  @Transactional()
  async updateArticleStatictics(slug: string) {
    let reqIp: string
    if (Context.getRequest().headers['x-real-ip']) {
      reqIp = Context.getRequest().headers['x-real-ip'] as string
    } else {
      reqIp = (Context.getRequest() as any).ip
    }

    const now = AwesomeHelp.convertDate(new Date(), 'YYYY-MM-DD');

    const readerRepo = OrmContext.getRepository(Reader)

    const reader = await readerRepo.findOne({
      where: { date: now, articleSlug: slug }
    })

    if (reader) {
      if (!reader.ips.includes(reqIp)) {
        reader.ips.push(reqIp)
        readerRepo.save(reader)
      }
    } else {
      const newReader = new Reader()
      newReader.articleSlug = slug;
      newReader.date = now;
      newReader.ips = [reqIp];
      readerRepo.save(newReader);
    }

    await this.websiteService.updateWebsiteStatistics();
  }

  @Transactional()
  async fetchTagsListWithArticle() {
    const repo = OrmContext.getRepository(Tag);

    const result = await repo.find({ relations: ["articles"]});

    return result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
    }))
  }

  @Transactional()
  async fetchArchListWithArticle() {
    const repo = OrmContext.getRepository(Archive);

    const result = await repo.find({ relations: ["articles"]});

    return result.map(item => ({
      id: item.id,
      archiveTime: item.archiveTime,
      name: '', // fix lint error
      articlesCount: item.articles.length
    }))
  }

  @Transactional()
  async fetchCatListWithArticle() {
    const repo = OrmContext.getRepository(Category);

    const result = await repo.find({ relations: ["articles"]});

    return result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
    }))
  }

  @Transactional()
  async searchArticleByKeyword(keyword: string) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.createQueryBuilder('article')
    .where('article.title like :title', { title: `%${keyword}%`})
    .orWhere('article.content like :content', { content: `%${keyword}%`})
    .getMany()

    return result
  }
}
