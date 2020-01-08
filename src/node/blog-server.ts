import { BlogServer } from '../common/blog-protocol';
import { Rpc } from '@malagu/rpc';
// import { Autowired, ApplicationLifecycle, Application } from '@malagu/core'
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { DouMiBlog } from '../interface';
import { Article } from './entity/article';

@Rpc(BlogServer)
export class BlogServerImpl implements BlogServer {

  // @Autowired(ApplicationLifecycle)
  // private lifecycles: ApplicationLifecycle<Application>[]

  @Transactional({ readOnly: true })
  async fetchHottestArticles(): Promise<DouMiBlog.HottestArticlItem[]> {

    const repo = OrmContext.getMongoRepository(Article);
    const result = await repo.find({ title: '由form表单来说说前后台数据之间的交互' });
    return Promise.resolve([{
      title: result[0].title,
      archiveTime: result[0].archiveTime,
      slug: result[0].slug
    }])
        // return Promise.resolve([
        //   {
        //       "title": "由form表单来说说前后台数据之间的交互",
        //       "archiveTime": "2016-09-24 19:57",
        //       "slug": "You-formBiao-Dan-Lai-Shuo-Shuo-Qian-Hou-Tai-Shu-Ju-Zhi-Jian-De-Jiao-Hu-88"
        //   }]);
    }
}
