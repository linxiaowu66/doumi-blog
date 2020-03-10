import * as React from 'react';
import { View } from '@malagu/react/lib/browser';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer } from '../common/blog-protocol';
import BlogContainer from './components/blogContainer';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from 'bizcharts';

interface Props {

}

interface State {
  pastYearArticlesCount: {month: string, count: number}[]
}

@View('/website/stats')
export default class WebsiteStatistics extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pastYearArticlesCount: []
    };
  }
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  async componentDidMount() {
    const result = await this.BlogServer.fetchArchsList();

    this.setState({
      pastYearArticlesCount: result.map(item => ({ month: item.archiveTime, count: item.articlesCount})).slice(0, 11)
    });
  }
  render() {
    const { pastYearArticlesCount } = this.state;
    const cols = {
      count: {
        alias: '文章数'
      },
      month: {
        alias: '月份'
      }
    };

    return (
      <BlogContainer
        contentClass="statistics-container"
        isOpenSnackbar={false}
      >
        <div>
          <Chart height={400} data={pastYearArticlesCount} scale={cols} forceFit>
            <Axis name="month" title />
            <Axis name="count" title />
            <Tooltip
              crosshairs={{
                type: 'y'
              }}
            />
            <Geom type="interval" position="month*count" />
          </Chart>
          <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客每月发布文章分布图</div>
        </div>
      </BlogContainer>
    );
  }
}
