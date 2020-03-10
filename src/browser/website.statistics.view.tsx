import * as React from 'react';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import BlogContainer from './components/blogContainer';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
***REMOVED*** from 'bizcharts';

interface Props {

***REMOVED***

interface State {
  pastYearArticlesCount: {month: string, count: number***REMOVED***[]
***REMOVED***

@View('/website/stats')
export default class WebsiteStatistics extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pastYearArticlesCount: []
    ***REMOVED***
***REMOVED***
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  async componentDidMount() {
    const result = await this.BlogServer.fetchArchsList();

    this.setState({
      pastYearArticlesCount: result.map(item => ({ month: item.archiveTime, count: item.articlesCount***REMOVED***)).slice(0, 11)
    ***REMOVED***
***REMOVED***
  render() {
    const { pastYearArticlesCount ***REMOVED*** = this.state;
    const cols = {
      count: {
        alias: '文章数'
    ***REMOVED***,
      month: {
        alias: '月份'
    ***REMOVED***
    ***REMOVED***

    return (
      <BlogContainer
        contentClass="statistics-container"
        isOpenSnackbar={false***REMOVED***
      >
        <div>
          <Chart height={400***REMOVED*** data={pastYearArticlesCount***REMOVED*** scale={cols***REMOVED*** forceFit>
            <Axis name="month" title />
            <Axis name="count" title />
            <Tooltip
              crosshairs={{
                type: 'y'
            ***REMOVED******REMOVED***
            />
            <Geom type="interval" position="month*count" />
          </Chart>
          <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客每月发布文章分布图</div>
        </div>
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
