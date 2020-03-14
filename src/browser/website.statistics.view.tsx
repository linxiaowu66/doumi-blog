import * as React from 'react';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import BlogContainer from './components/blogContainer';
import ArchiveChart from './components/archiveChart';
import CategoryChart from './components/categoryChart';
import HottestChart from './components/hottestChart';
import VisitorChart from './components/visitorChart';
import TagsChart from './components/tagsChart';


interface Props {

***REMOVED***

export interface CatItem extends DouMiBlog.CategoryItem {
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

    return (
      <BlogContainer
        contentClass="statistics-container"
        isOpenSnackbar={false***REMOVED***
      >
        <div>
          <CategoryChart list={catList***REMOVED*** />
        </div>
        <div>
          <HottestChart list={hottestList***REMOVED*** />
        </div>
        <div>
          <VisitorChart list={websiteList***REMOVED*** />
        </div>
        <div>
          <ArchiveChart list={archList***REMOVED*** />
        </div>
        <div>
          <TagsChart list={tagList***REMOVED*** />
        </div>
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
