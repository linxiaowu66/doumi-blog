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
  Legend,
  View as G2View
} from 'bizcharts';
// eslint-disable-next-line
import DataSet from '@antv/data-set';

interface Props {

}

interface CatItem extends DouMiBlog.CategoryItem {
  percent: number
}

interface State {
  archList: DouMiBlog.ArchiveItem[],
  catList: CatItem[],
  tagList: DouMiBlog.TagsItem[],
  hottestList: DouMiBlog.ArticleStatsItem[],
  websiteList: DouMiBlog.WebsiteStatsItem[]
}

@View('/website/stats')
export default class WebsiteStatistics extends React.Component<Props, State> {
  chart: G2.Chart;

  constructor(props: Props) {
    super(props);
    this.state = {
      archList: [],
      catList: [],
      tagList: [],
      hottestList: [],
      websiteList: []
    };
  }
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  async componentDidMount() {
    const [tagList, archList, catList, hottestList, websiteList] = await Promise.all<
    DouMiBlog.TagsItem[], DouMiBlog.ArchiveItem[], DouMiBlog.CategoryItem[], DouMiBlog.ArticleStatsItem[], DouMiBlog.WebsiteStatsItem[]>([
      this.BlogServer.fetchTagsList(),
      this.BlogServer.fetchArchsList(),
      this.BlogServer.fetchCatsList(),
      this.BlogServer.fetchHottestArticleLast7Days(),
      this.BlogServer.fetchWebsiteStatistics()
    ]);

    let totalCount = 0;
    catList.map(item => totalCount += item.articlesCount);

    this.setState({
      archList: archList.slice(0, 24),
      catList: catList.map(it => ({ ...it, percent: (it.articlesCount / totalCount)})),
      tagList: tagList.map(it => ({ ...it, percent: (it.articlesCount / totalCount)})),
      hottestList,
      websiteList
    });
  }
  render() {
    const { archList, catList, tagList, websiteList, hottestList } = this.state;
    const colsForArch = {
      articlesCount: {
        alias: '文章数'
      },
      archiveTime: {
        alias: '月份'
      }
    };
    const colsForArticle = {
      name: {
        alias: '文章'
      },
      count: {
        alias: '阅读次数'
      }
    };
    const colsForTag = {
      name: {
        alias: '标签'
      },
      articlesCount: {
        alias: '文章数'
      },
      percent: {
        alias: '占比',
        formatter: (value: string) => (+value * 100).toFixed(2) + '%'
      }
    };
    // const colsForCat = {
    //   percent: {
    //     formatter: (val: string | number) => (val = `${+val * 100}%`),
    //   },
    // };
    const ds = new DataSet();
    ds.setState('type', '');
    const dv = ds.createView().source(websiteList);

    dv.transform({
      type: 'fold',
      fields: ['todayUv', 'todayPv'], // 展开字段集
      key: 'type', // key字段
      value: 'value', // value字段
    })
      .transform({
        type: 'filter',
        callback: d => {
          console.log(ds.state.type);
          return d.type !== ds.state.type;
        }
      });
    console.log('>>>>', dv);
    const scale = {
      totalPv: {
        type: 'linear',
        alias: '博客访问量',
      },
      // 因为是个日期导致触达这个错误：“dodge is not support linear attribute”,根据网上的解决方案需要添加这个配置
      date:{
        type:'timeCat'
      },
    };

    const legendItems = [
      { value: 'todayUv', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
      { value: 'todayPv', marker: { symbol: 'square', fill: '#54ca76', radius: 5 } },
      { value: 'totalPv', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 } },
    ];

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
            <Geom type="line" position="archiveTime*articlesCount" size={2} shape={'smooth'} />
            <Geom type="point" position="archiveTime*articlesCount" />
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
        <div>
          <Chart height={400} data={tagList} scale={colsForTag} forceFit>
            <Tooltip showTitle={false} />
            <Axis name="articlesCount" title />
            <Axis
              name="percent"
              title
            />
            <Legend name="name" slidable={false} width={0} height={0} itemWidth={70} />
            <Geom
              type="point"
              position="percent*articlesCount"
              color="name"
              tooltip="name*articlesCount*percent"
              opacity={0.65}
              shape="circle"
              size={['articlesCount', [4, 65]]}
              style={[
                'name',
                {
                  lineWidth: 1,
                  strokeOpacity: 1,
                  fillOpacity: 0.3,
                  opacity: 0.65,
                }
              ]}
            />
          </Chart>
        </div>
        <div>
          <Chart height={400} width={500} forceFit data={dv} scale={scale} padding="auto" onGetG2Instance={c => {
            this.chart = c;
          }}>
            <Legend
              custom
              // allowAllCanceled
              items={legendItems}
            />
            <Axis name="date" />
            <Axis name="value" position={'left'} />
            <Tooltip />
            <Geom
              type="interval"
              position="date*value"
              color={['type', value => {
                if (value === 'todayUv') {
                  return '#3182bd';
                }
                if (value === 'todayPv') {
                  return '#54ca76';
                }
                return '';
              }]}
              adjust={[{
                type: 'dodge',
                marginRatio: 1 / 32,
              }]}
            />
            <G2View data={websiteList} >
              <Axis name="totalPv" position="right" label={{
                formatter: val => `${(+val / 10000)}万`
              }} />
              <Geom type="line" position="date*totalPv" color="#fad248" size={3} shape={'smooth'} />
              <Geom
                type="point"
                position="date*totalPv"
                size={4}
                shape={'circle'}
                color={'totalPv'}
                style={{
                  stroke: '#fff',
                  lineWidth: 1
                }}
              />
            </G2View>
          </Chart>
        </div>
        <div>
          <Chart height={400} data={hottestList} scale={colsForArticle} forceFit>
            <Axis name="name" />
            <Axis name="count" title />
            <Tooltip
              crosshairs={{
                type: 'y'
              }}
            />
            <Geom type="interval" position="name*count" />
          </Chart>
          <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客每月发布文章分布图</div>
        </div>
      </BlogContainer>
    );
  }
}
