import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';
import { PasswordEncoder, Anonymous ***REMOVED*** from '@malagu/security/lib/node';
import { Autowired ***REMOVED*** from '@malagu/core';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
// import { DouMiBlog ***REMOVED*** from '../interface/index.d';
import { User ***REMOVED*** from './entity/user';
import { Tag ***REMOVED*** from './entity/tag';
import { Category ***REMOVED*** from './entity/category';

@Rpc(BlogServer)
@Anonymous()
export class BlogServerImpl implements BlogServer {

  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder

  @Transactional()
  async fetchHottestArticles(limit: number): Promise<DouMiBlog.HottestArticlItem[]> {

    // const repo = OrmContext.getMongoRepository(Article);
    // const result = await repo.find({ title: '由form表单来说说前后台数据之间的交互' ***REMOVED***
    // console.log(result)
    // return Promise.resolve([{
    //   title: result[0].title,
    //   archiveTime: result[0].archiveTime,
    //   slug: result[0].slug
    // ***REMOVED***])
    return Promise.resolve([
      {
          "title": "由form表单来说说前后台数据之间的交互",
          "archiveTime": "2016-09-24 19:57",
          "slug": "You-formBiao-Dan-Lai-Shuo-Shuo-Qian-Hou-Tai-Shu-Ju-Zhi-Jian-De-Jiao-Hu-88"
    ***REMOVED***]);
  ***REMOVED***

    @Transactional()
    async fetchTagsList(): Promise<DouMiBlog.TagsItem[]> {
      const repo = OrmContext.getRepository(Tag);

      const result = await repo.find({ relations: ["articles"]***REMOVED***

      const finalRes = result.map(item => ({
        id: item.id,
        name: item.name,
        articlesCount: item.articles.length
    ***REMOVED***))

      return Promise.resolve(finalRes)
  ***REMOVED***
    @Transactional()
    async fetchCatsList(): Promise<DouMiBlog.CategoryItem[]> {
      const repo = OrmContext.getRepository(Category);

      const result = await repo.find({ relations: ["articles"]***REMOVED***

      const finalRes = result.map(item => ({
        id: item.id,
        name: item.name,
        articlesCount: item.articles.length
    ***REMOVED***))

      return Promise.resolve(finalRes)
  ***REMOVED***

    @Transactional()
    async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
      const repo = OrmContext.getRepository(User)

      const pwd = await this.passwordEncoder.encode(param.password);

      await repo.save({ ...param, password: pwd ***REMOVED***
      return Promise.resolve('注册成功');
  ***REMOVED***
***REMOVED***
