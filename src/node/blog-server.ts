import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { DouMiBlog ***REMOVED*** from '../interface';
import { User ***REMOVED*** from './entity/user';

@Rpc(BlogServer)
export class BlogServerImpl implements BlogServer {

  // @Transactional()
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
    async registerUser(param: DouMiBlog.RegisterParam): Promise<string> {
      const repo = OrmContext.getRepository(User)

      repo.save(param)
      return Promise.resolve('注册成功');
  ***REMOVED***
***REMOVED***
