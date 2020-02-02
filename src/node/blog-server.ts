import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { Rpc } from '@malagu/rpc';
import { PasswordEncoder, Anonymous } from '@malagu/security/lib/node';
import { Autowired } from '@malagu/core';
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { BlogServiceSymbol, BlogService } from './services';
import { User } from './entity/user';
import { Tag } from './entity/tag';
import { Category } from './entity/category';
import { Archive } from './entity/archive';

const pick = require('lodash.pick');

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder

  @Autowired(BlogServiceSymbol)
  protected readonly blogService: BlogService;

  @Transactional()
  async fetchHottestArticles(limit: number): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(1, limit, {
      pv: 'DESC'
    })

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime']))

    return Promise.resolve(result)
  }

  async fetchArticleList(currentPage: number, condition?: DouMiBlog.queryCondition): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(currentPage, 5, null, condition)

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(result)
  }

  async fetchArticleDetail(slug: string): Promise<DouMiBlog.ArticleDetail> {
    const result = await this.blogService.fetchArticleDetail(slug)

    return Promise.resolve(result);
  }

  @Transactional()
  async fetchTagsList(): Promise<DouMiBlog.TagsItem[]> {
    const repo = OrmContext.getRepository(Tag);

    const result = await repo.find({ relations: ["articles"]});

    const finalRes = result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
    }))

    return Promise.resolve(finalRes)
  }
  @Transactional()
  async fetchCatsList(): Promise<DouMiBlog.CategoryItem[]> {
    const repo = OrmContext.getRepository(Category);

    const result = await repo.find({ relations: ["articles"]});

    const finalRes = result.map(item => ({
      id: item.id,
      name: item.name,
      articlesCount: item.articles.length
    }))

    return Promise.resolve(finalRes)
  }

  @Transactional()
  async fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]> {
    const repo = OrmContext.getRepository(Archive);

    const result = await repo.find({ relations: ["articles"]});

    const finalRes = result.map(item => ({
      id: item.id,
      archiveTime: item.archiveTime,
      name: '', // fix lint error
      articlesCount: item.articles.length
    }))

    return Promise.resolve(finalRes)
  }

  @Transactional()
  async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
    const repo = OrmContext.getRepository(User)

    const pwd = await this.passwordEncoder.encode(param.password);

    await repo.save({ ...param, password: pwd });
    return Promise.resolve('注册成功');
  }
}
