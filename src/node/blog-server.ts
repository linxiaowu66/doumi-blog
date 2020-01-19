import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { Rpc } from '@malagu/rpc';
import { PasswordEncoder, Anonymous } from '@malagu/security/lib/node';
import { Autowired } from '@malagu/core';
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
// import { DouMiBlog } from '../interface/index.d';
import { User } from './entity/user';
import { Tag } from './entity/tag';
import { Category } from './entity/category';

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder

  @Transactional()
  async fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]> {

    // const repo = OrmContext.getMongoRepository(Article);
    // const result = await repo.find({ title: '由form表单来说说前后台数据之间的交互' });
    // console.log(result)
    // return Promise.resolve([{
    //   title: result[0].title,
    //   archiveTime: result[0].archiveTime,
    //   slug: result[0].slug
    // }])
    return Promise.resolve([
      {
          "title": "由form表单来说说前后台数据之间的交互",
          "archiveTime": "2016-09-24 19:57",
          "slug": "You-formBiao-Dan-Lai-Shuo-Shuo-Qian-Hou-Tai-Shu-Ju-Zhi-Jian-De-Jiao-Hu-88"
      }]);
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
    async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
      const repo = OrmContext.getRepository(User)

      const pwd = await this.passwordEncoder.encode(param.password);

      await repo.save({ ...param, password: pwd });
      return Promise.resolve('注册成功');
    }
}
