import * as React from 'react'
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import Timeline from './components/timeline';
import Divider from '@material-ui/core/Divider';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';

interface Prop {***REMOVED***
interface State {
  changeLog: DouMiBlog.ChangeLog[]
***REMOVED***

@View('/about/blog')
export default class AboutWebsite extends React.Component<Prop, State> {

  @Autorpc(BlogServer)
  protected readonly blogServer: BlogServer;

  constructor(props: Prop) {
    super(props)

    this.state = {
      changeLog: []
  ***REMOVED***
***REMOVED***

  async componentWillMount() {
    const result = await this.blogServer.fetchWebsiteChangeLog()

    this.setState({
      changeLog: result,
  ***REMOVED***)
***REMOVED***

  render() {
    const { changeLog ***REMOVED*** = this.state;
    return (
      <BlogContainer>
        <Timeline
          title='网站更新记录'
          timeList={changeLog.map(item => ({
            subTitle: item.title,
            time: `${item.date***REMOVED*** ${item.time***REMOVED***`,
            desc: `${item.desc1***REMOVED***${item.desc2***REMOVED***`
        ***REMOVED***))***REMOVED***
        />
        <Divider />
        <Timeline
          title='网站技术栈'
          timeList={[{
            subTitle: '前端',
            time: '2020-02-10',
            desc: 'Malagu + React + RR4 + Material UI + RPC'
        ***REMOVED***, {
            subTitle: '后端',
            time: '2020-02-10',
            desc: 'Malagu + Express + TypeORM'
        ***REMOVED***]***REMOVED***
        />
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
