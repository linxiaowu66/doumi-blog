import * as React from 'react'
import BlogContainer from './components/blogContainer';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

interface Prop {***REMOVED***
interface State {
    response: string
***REMOVED***

@View('/blog')
export default class BlogList extends React.Component<Prop, State> {
  render() {
    return(
      <BlogContainer>
        <BlogItem
          title='还没搞懂nodejs的http服务器？看这一篇就够了'
          mediaUrl='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/node_server9.png?x-oss-process=style/addWaterMarkBottom'
          archiveTime='2019-12-02 10:47'
          digest='全文可以是多少待会撒大声地十点十几等级结算巴巴爸爸爸爸吧' />
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
