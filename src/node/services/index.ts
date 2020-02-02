import { Component } from '@malagu/core';
import { In } from 'typeorm';
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { Article } from '../entity/article';
import { DouMiBlog } from '../../common/blog-protocol';

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
      },
      take: pageSize? pageSize : PAGE_SIZE,
      skip: (currentPage - 1) * (pageSize ? pageSize : PAGE_SIZE), // think this needs to be page * limit
      relations: ['tags', 'archiveTime', 'category', 'author']
    }

    let whereQuery = {}

    if (condition) {
      if (condition.queryTag) {
        whereQuery = {
          tags: In([condition.queryTag])
        }
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

    const [list, allArticles] = await Promise.all([repo.find({...baseQuery, ...whereQuery}), repo.find(whereQuery)])

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.archiveTime.archiveTime,
      author: item.author.username
    })), pageCount: Math.ceil(allArticles.length / (pageSize ? pageSize : PAGE_SIZE)), currentPage}
  }

  @Transactional()
  async fetchArticleDetail(slug: string) {
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
}
