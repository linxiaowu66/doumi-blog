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
  Legend,
  View as G2View,
  Label,
  G2
***REMOVED*** from 'bizcharts';
// eslint-disable-next-line
import DataSet from '@antv/data-set';

interface Props {

***REMOVED***

interface CatItem extends DouMiBlog.CategoryItem {
  percent: number
***REMOVED***

interface State {
  archList: DouMiBlog.ArchiveItem[],
  catList: CatItem[],
  tagList: DouMiBlog.TagsItem[],
  hottestList: DouMiBlog.ArticleStatsItem[],
  websiteList: DouMiBlog.WebsiteStatsItem[]
***REMOVED***

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
    ***REMOVED***
***REMOVED***
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
      catList: catList.map(it => ({ ...it, percent: (it.articlesCount / totalCount)***REMOVED***)),
      tagList: tagList.map(it => ({ ...it, percent: (it.articlesCount / totalCount)***REMOVED***)),
      hottestList,
      websiteList
    ***REMOVED***
***REMOVED***
  render() {
    const { archList, catList, tagList, websiteList, hottestList ***REMOVED*** = this.state;
    const colsForArch = {
      articlesCount: {
        alias: '文章数'
    ***REMOVED***,
      archiveTime: {
        alias: '月份'
    ***REMOVED***
    ***REMOVED***
    // const colsForArticle = {
    //   name: {
    //     alias: '文章'
    // ***REMOVED***,
    //   count: {
    //     alias: '阅读次数'
    // ***REMOVED***
    // ***REMOVED***
    const colsForTag = {
      name: {
        alias: '标签'
    ***REMOVED***,
      articlesCount: {
        alias: '文章数'
    ***REMOVED***,
      percent: {
        alias: '占比',
        formatter: (value: string) => (+value * 100).toFixed(2) + '%'
    ***REMOVED***
    ***REMOVED***
    // const colsForCat = {
    //   percent: {
    //     formatter: (val: string | number) => (val = `${+val * 100***REMOVED***%`),
    // ***REMOVED***,
    // ***REMOVED***
    const ds = new DataSet();
    ds.setState('type', '');
    const dv = ds.createView().source(websiteList);

    dv.transform({
      type: 'fold',
      fields: ['todayUv', 'todayPv'], // 展开字段集
      key: 'type', // key字段
      value: 'value', // value字段
  ***REMOVED***)
      .transform({
        type: 'filter',
        callback: d => {
          console.log(ds.state.type);
          return d.type !== ds.state.type;
      ***REMOVED***
      ***REMOVED***

    let max = 0;
    hottestList.forEach(function(obj) {
      if (obj.count > max) {
        max = obj.count;
    ***REMOVED***
    ***REMOVED***
    // console.log('>>>>', hottestList);
    (G2.Shape as any).registerShape('interval', 'sliceShape', {
      draw(cfg: any, container: any) {
        const points = cfg.points;
        const origin = cfg.origin._origin;
        const percent = origin.count / max;
        const xWidth = points[2].x - points[1].x;
        const width = xWidth * percent;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', points[0].x + width, points[2].y]);
        path.push(['L', points[0].x + width, points[3].y]);
        path.push('Z');
        path = this.parsePath(path);
        return container.addShape('path', {
          attrs: {
            fill: cfg.color,
            path: path
        ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    ***REMOVED***
    const scale = {
      totalPv: {
        type: 'linear',
        alias: '博客访问量',
    ***REMOVED***,
      // 因为是个日期导致触达这个错误：“dodge is not support linear attribute”,根据网上的解决方案需要添加这个配置
      date:{
        type:'timeCat'
    ***REMOVED***,
    ***REMOVED***

    const legendItems = [
      { value: 'todayUv', marker: { symbol: 'square', fill: '#3182bd', radius: 5 ***REMOVED*** ***REMOVED***,
      { value: 'todayPv', marker: { symbol: 'square', fill: '#54ca76', radius: 5 ***REMOVED*** ***REMOVED***,
      { value: 'totalPv', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 ***REMOVED*** ***REMOVED***,
    ];

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
            <Geom type="line" position="archiveTime*articlesCount" size={2***REMOVED*** shape={'smooth'***REMOVED*** />
            <Geom type="point" position="archiveTime*articlesCount" />
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
        <div>
          <Chart height={400***REMOVED*** data={tagList***REMOVED*** scale={colsForTag***REMOVED*** forceFit>
            <Tooltip showTitle={false***REMOVED*** />
            <Axis name="articlesCount" title />
            <Axis
              name="percent"
              title
            />
            <Legend name="name" slidable={false***REMOVED*** width={0***REMOVED*** height={0***REMOVED*** itemWidth={70***REMOVED*** />
            <Geom
              type="point"
              position="percent*articlesCount"
              color="name"
              tooltip="name*articlesCount*percent"
              opacity={0.65***REMOVED***
              shape="circle"
              size={['articlesCount', [4, 65]]***REMOVED***
              style={[
                'name',
                {
                  lineWidth: 1,
                  strokeOpacity: 1,
                  fillOpacity: 0.3,
                  opacity: 0.65,
              ***REMOVED***
              ]***REMOVED***
            />
          </Chart>
        </div>
        <div>
          <Chart height={400***REMOVED*** width={500***REMOVED*** forceFit data={dv***REMOVED*** scale={scale***REMOVED*** padding="auto" onGetG2Instance={c => {
            this.chart = c;
        ***REMOVED******REMOVED***>
            <Legend
              custom
              // allowAllCanceled
              items={legendItems***REMOVED***
            />
            <Axis name="date" />
            <Axis name="value" position={'left'***REMOVED*** />
            <Tooltip />
            <Geom
              type="interval"
              position="date*value"
              color={['type', value => {
                if (value === 'todayUv') {
                  return '#3182bd';
              ***REMOVED***
                if (value === 'todayPv') {
                  return '#54ca76';
              ***REMOVED***
                return '';
            ***REMOVED***]***REMOVED***
              adjust={[{
                type: 'dodge',
                marginRatio: 1 / 32,
            ***REMOVED***]***REMOVED***
            />
            <G2View data={websiteList***REMOVED*** >
              <Axis name="totalPv" position="right" label={{
                formatter: val => `${(+val / 10000)***REMOVED***万`
            ***REMOVED******REMOVED*** />
              <Geom type="line" position="date*totalPv" color="#fad248" size={3***REMOVED*** shape={'smooth'***REMOVED*** />
              <Geom
                type="point"
                position="date*totalPv"
                size={4***REMOVED***
                shape={'circle'***REMOVED***
                color={'totalPv'***REMOVED***
                style={{
                  stroke: '#fff',
                  lineWidth: 1
              ***REMOVED******REMOVED***
              />
            </G2View>
          </Chart>
        </div>
        <div>
          <Chart height={400***REMOVED*** data={hottestList***REMOVED*** forceFit>
            <Coord type="theta" radius={0.8***REMOVED*** />
            <Tooltip />
            <Geom
              type="intervalStack"
              position="count"
              color="name"
              shape="sliceShape"
            >
              <Label content="name" />
            </Geom>
          </Chart>
          <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客每月发布文章分布图</div>
        </div>
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
