import * as React from 'react';
import { View } from '@malagu/react/lib/browser';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import BlogContainer from './components/blogContainer';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend
} from 'bizcharts';

interface Props {

}

interface CatItem extends DouMiBlog.CategoryItem {
  percent: number
}

interface State {
  archList: DouMiBlog.ArchiveItem[],
  catList: CatItem[],
  tagList: DouMiBlog.TagsItem[]
}

@View('/website/stats')
export default class WebsiteStatistics extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      archList: [],
      catList: [],
      tagList: []
    };
  }
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  async componentDidMount() {
    const [tagList, archList, catList] = await Promise.all<DouMiBlog.TagsItem[], DouMiBlog.ArchiveItem[], DouMiBlog.CategoryItem[]>([
      this.BlogServer.fetchTagsList(),
      this.BlogServer.fetchArchsList(),
      this.BlogServer.fetchCatsList(),
    ]);

    let totalCount = 0;
    catList.map(item => totalCount += item.articlesCount);

    this.setState({
      archList,
      catList: catList.map(it => ({ ...it, percent: (it.articlesCount / totalCount)})),
      tagList
    });
  }
  render() {
    const { archList, catList } = this.state;
    const colsForArch = {
      articlesCount: {
        alias: '文章数'
      },
      archiveTime: {
        alias: '月份'
      }
    };
    // const colsForCat = {
    //   percent: {
    //     formatter: (val: string | number) => (val = `${+val * 100}%`),
    //   },
    // };

    return (
      <BlogContainer
        contentClass="statistics-container"
        isOpenSnackbar={false}
      >
        <div>
          <Chart height={400} data={archList} scale={colsForArch} forceFit>
            <Axis name="archiveTime" title />
            <Axis name="articlesCount" title />
            <Tooltip
              crosshairs={{
                type: 'y'
              }}
            />
            <Geom type="interval" position="archiveTime*articlesCount" />
          </Chart>
          <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客每月发布文章分布图</div>
        </div>
        <div>
          <Chart
            width={600}
            height={400}
            data={catList}
            // scale={colsForCat}
            padding="auto"
            forceFit
            onPlotClick={ev => {
              console.log('跳转...', ev);
            }}
          >
            <Coord type="theta" radius={0.65} />
            <Axis name="percent" />
            <Legend position="right" offsetY={-400 / 2 + 120} offsetX={-100} />
            <Tooltip
              showTitle={false}
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="name"
              tooltip={[
                'name*articlesCount',
                (name, articlesCount) => {
                  articlesCount = `${articlesCount}篇`;
                  return {
                    name: name,
                    value: articlesCount,
                  };
                },
              ]}
              style={{
                lineWidth: 1,
                stroke: '#fff',
              }}
            />
          </Chart>
        </div>
      </BlogContainer>
    );
  }
}
