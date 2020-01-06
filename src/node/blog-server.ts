import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';
import { DouMiBlog ***REMOVED*** from '../interface';

@Rpc(BlogServer)
export class BlogServerImpl implements BlogServer {
  fetchHottestArticles(): Promise<DouMiBlog.HottestArticlItem[]> {
        return Promise.resolve([
          {
              "title": "由form表单来说说前后台数据之间的交互",
              "archiveTime": "2016-09-24 19:57",
              "slug": "You-formBiao-Dan-Lai-Shuo-Shuo-Qian-Hou-Tai-Shu-Ju-Zhi-Jian-De-Jiao-Hu-88"
        ***REMOVED***]);
  ***REMOVED***
***REMOVED***
