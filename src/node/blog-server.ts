import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { Rpc } from '@malagu/rpc';
import { Anonymous } from '@malagu/security/lib/node';
import { Autowired } from '@malagu/core';
import { Transactional } from '@malagu/typeorm/lib/node';
import { BlogServiceSymbol, BlogService } from './services';
import { AuthServiceSymbol, AuthService } from './services/auth.service';


const pick = require('lodash.pick');

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(AuthServiceSymbol)
  protected readonly authService: AuthService;

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

  // TODO: fix the pipeManager bug
  @Transactional()
  async fetchArticleList(currentPage: number, condition?: DouMiBlog.queryCondition): Promise<DouMiBlog.ArticleList> {
    const result = await this.blogService.fetchArticleList(currentPage, 5, null, condition)

    result.list = result.list.map(item => pick(item, ['title', 'slug', 'archiveTime', 'digest', 'illustration']))

    return Promise.resolve(result)
  }

  @Transactional()
  async fetchArticleDetail(slug: string): Promise<DouMiBlog.ArticleDetail> {
    const result = await this.blogService.fetchArticleDetail(slug)

    return Promise.resolve(result);
  }

  @Transactional()
  async fetchTagsList(): Promise<DouMiBlog.TagsItem[]> {
    const result = await this.blogService.fetchTagsListWithArticle();

    return Promise.resolve(result)
  }
  @Transactional()
  async fetchCatsList(): Promise<DouMiBlog.CategoryItem[]> {
    const result = await this.blogService.fetchCatListWithArticle();

    return Promise.resolve(result)
  }

  @Transactional()
  async fetchArchsList(): Promise<DouMiBlog.ArchiveItem[]> {
    const result = await this.blogService.fetchArchListWithArticle()

    return Promise.resolve(result)
  }

  @Transactional()
  async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
    await this.authService.registerUser(param);
    return Promise.resolve('注册成功');
  }
}
