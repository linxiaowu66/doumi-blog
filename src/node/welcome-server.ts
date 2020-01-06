import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import { Rpc ***REMOVED*** from '@malagu/rpc';

@Rpc(BlogServer)
export class BlogServerImpl implements BlogServer {
    say(): Promise<string> {
        return Promise.resolve('Blog to Malagu!');
  ***REMOVED***
***REMOVED***
