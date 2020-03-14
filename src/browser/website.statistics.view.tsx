import * as React from 'react';
import { View } from '@malagu/react/lib/browser';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import BlogContainer from './components/blogContainer';
import ArchiveChart from './components/archiveChart';
import CategoryChart from './components/categoryChart';
import HottestChart from './components/hottestChart';
import VisitorChart from './components/visitorChart';
import TagsChart from './components/tagsChart';


interface Props {

}

export interface CatItem extends DouMiBlog.CategoryItem {
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

    return (
      <BlogContainer
        contentClass="statistics-container"
        isOpenSnackbar={false}
      >
        <div>
          <CategoryChart list={catList} />
        </div>
        <div>
          <HottestChart list={hottestList} />
        </div>
        <div>
          <VisitorChart list={websiteList} />
        </div>
        <div>
          <ArchiveChart list={archList} />
        </div>
        <div>
          <TagsChart list={tagList} />
        </div>
      </BlogContainer>
    );
  }
}
