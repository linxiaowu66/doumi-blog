import * as React from 'react';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import BlogContainer from './components/blogContainer';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend
***REMOVED*** from 'bizcharts';

interface Props {

***REMOVED***

interface CatItem extends DouMiBlog.CategoryItem {
  percent: number
***REMOVED***

interface State {
  archList: DouMiBlog.ArchiveItem[],
  catList: CatItem[],
  tagList: DouMiBlog.TagsItem[]
***REMOVED***

@View('/website/stats')
export default class WebsiteStatistics extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      archList: [],
      catList: [],
      tagList: []
    ***REMOVED***
***REMOVED***
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
      catList: catList.map(it => ({ ...it, percent: (it.articlesCount / totalCount)***REMOVED***)),
      tagList
    ***REMOVED***
***REMOVED***
  render() {
    const { archList, catList ***REMOVED*** = this.state;
    const colsForArch = {
      articlesCount: {
        alias: '文章数'
    ***REMOVED***,
      archiveTime: {
        alias: '月份'
    ***REMOVED***
    ***REMOVED***
    // const colsForCat = {
    //   percent: {
    //     formatter: (val: string | number) => (val = `${+val * 100***REMOVED***%`),
    // ***REMOVED***,
    // ***REMOVED***

    return (
      <BlogContainer
        contentClass="statistics-container"
        isOpenSnackbar={false***REMOVED***
      >
        <div>
          <Chart height={400***REMOVED*** data={archList***REMOVED*** scale={colsForArch***REMOVED*** forceFit>
            <Axis name="archiveTime" title />
            <Axis name="articlesCount" title />
            <Tooltip
              crosshairs={{
                type: 'y'
            ***REMOVED******REMOVED***
            />
            <Geom type="interval" position="archiveTime*articlesCount" />
          </Chart>
          <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客每月发布文章分布图</div>
        </div>
        <div>
          <Chart
            width={600***REMOVED***
            height={400***REMOVED***
            data={catList***REMOVED***
            // scale={colsForCat***REMOVED***
            padding="auto"
            forceFit
            onPlotClick={ev => {
              console.log('跳转...', ev);
          ***REMOVED******REMOVED***
          >
            <Coord type="theta" radius={0.65***REMOVED*** />
            <Axis name="percent" />
            <Legend position="right" offsetY={-400 / 2 + 120***REMOVED*** offsetX={-100***REMOVED*** />
            <Tooltip
              showTitle={false***REMOVED***
              itemTpl='<li><span style="background-color:{color***REMOVED***" class="g2-tooltip-marker"></span>{name***REMOVED***: {value***REMOVED***</li>'
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="name"
              tooltip={[
                'name*articlesCount',
                (name, articlesCount) => {
                  articlesCount = `${articlesCount***REMOVED***篇`;
                  return {
                    name: name,
                    value: articlesCount,
                  ***REMOVED***
              ***REMOVED***,
              ]***REMOVED***
              style={{
                lineWidth: 1,
                stroke: '#fff',
            ***REMOVED******REMOVED***
            />
          </Chart>
        </div>
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
