import { Component ***REMOVED*** from '@malagu/core';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { Article ***REMOVED*** from '../entity/article';

export const BlogServiceSymbol = Symbol('BlogService');

const PAGE_SIZE = 5;

@Component(BlogServiceSymbol)
export class BlogService {

  @Transactional()
  async fetchArticleList(currentPage = 1, pageSize = 5, order?: any) {
    const repo = OrmContext.getRepository(Article);

    const [list, allArticles] = await Promise.all([repo.find({
      order: order ? order : {
        createdAt: 'DESC'
    ***REMOVED***,
      take: pageSize? pageSize : PAGE_SIZE,
      skip: (currentPage - 1) * (pageSize ? pageSize : PAGE_SIZE), // think this needs to be page * limit
      relations: ['tags', 'archiveTime', 'category', 'author']
  ***REMOVED***), repo.find()])

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.archiveTime.archiveTime,
      author: item.author.username
  ***REMOVED***)), pageCount: Math.ceil(allArticles.length / (pageSize ? pageSize : PAGE_SIZE)), currentPage***REMOVED***
***REMOVED***
***REMOVED***
