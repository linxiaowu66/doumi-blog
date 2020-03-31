import * as React from 'react';
import { View } from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import Timeline from './components/timeline';
import Divider from '@material-ui/core/Divider';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';

interface Prop {}
interface State {
  changeLog: DouMiBlog.ChangeLog[],
  isOpenSnackbar: boolean,
  snackbarMsg: string,
}

@View('/about/blog')
export default class AboutWebsite extends React.Component<Prop, State> {

  @Autorpc(BlogServer)
  protected readonly blogServer: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = {
      changeLog: [],
      isOpenSnackbar: false,
      snackbarMsg: '',
    };
  }

  async componentDidMount() {
    try {
      const result = await this.blogServer.fetchWebsiteChangeLog();

      this.setState({
        changeLog: result,
      });
    } catch (err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取变更记录失败，请稍后重试',
      });
    }
  }

  render() {
    const { changeLog, isOpenSnackbar, snackbarMsg } = this.state;
    return (
      <BlogContainer isOpenSnackbar={isOpenSnackbar} snackbarMsg={snackbarMsg}>
        <Timeline
          title='网站更新记录'
          timeList={changeLog.map(item => ({
            subTitle: item.title,
            time: `${item.date} ${item.time}`,
            desc: `${item.desc1}${item.desc2}`
          }))}
        />
        <Divider />
        <Timeline
          title='网站技术栈'
          timeList={[{
            subTitle: '前端',
            time: '2020-02-10',
            desc: 'Malagu + React + RR4 + Material UI + RPC'
          }, {
            subTitle: '后端',
            time: '2020-02-10',
            desc: 'Malagu + Express + TypeORM'
          }]}
        />
      </BlogContainer>
    );
  }
}
