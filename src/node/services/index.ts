import { Component ***REMOVED*** from '@malagu/core';
import { In ***REMOVED*** from 'typeorm';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { Article ***REMOVED*** from '../entity/article';
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

    const [list, allArticles] = await Promise.all([repo.find({...baseQuery, ...whereQuery***REMOVED***), repo.find(whereQuery)])

    return { list: list.map(item => ({
      ...item,
      tags: item.tags.map(it => it.name),
      category: item.category.name,
      archiveTime: item.archiveTime.archiveTime,
      author: item.author.username
  ***REMOVED***)), pageCount: Math.ceil(allArticles.length / (pageSize ? pageSize : PAGE_SIZE)), currentPage***REMOVED***
***REMOVED***

  @Transactional()
  async fetchArticleDetail(slug: string) {
    const repo = OrmContext.getRepository(Article);

    const result = await repo.findOne({ slug ***REMOVED***, { relations: ['tags', 'archiveTime', 'category', 'author'] ***REMOVED***)

    if (!result) {
      throw new Error('找不到对应文章')
  ***REMOVED***

    return {
      ...result,
      tags: result.tags.map(it => it.name),
      category: result.category.name,
      archiveTime: result.archiveTime.archiveTime,
      author: result.author.username
  ***REMOVED***
***REMOVED***
***REMOVED***
