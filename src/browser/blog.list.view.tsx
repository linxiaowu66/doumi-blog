import * as React from 'react'
import * as query from 'query-string';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer } from '../common/blog-protocol';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import { View } from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

import './styles/blog.list.less';

interface Prop {}
interface State {
  blogList: {title: string, digest: string, slug: string, illustration: string}[],
  pageCount: number,
  currentPage: number,
}

@View('/blog/list')
export default class BlogList extends React.Component<Prop, State> {

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(prop: Prop) {
    super(prop);
    this.state = {
      blogList: [],
      pageCount: 1,
      currentPage: 1,
    };
  }

  async componentWillMount() {
    try {
      await this.fetchBlogList(this.state.currentPage)
    } catch (err) {
      console.log(err)
    }
  }
  fetchBlogList = async (currentPage: number) => {
    const { queryTag, queryArch, queryCat } = query.parse((this.props as any).location.search)
    let queryCondition = {}
    if (queryTag) {
      queryCondition = { ...queryCondition, queryTag }
    }
    if (queryArch) {
      queryCondition = { ...queryCondition, queryArch }
    }
    if (queryCat) {
      queryCondition = { ...queryCondition, queryCat }
    }
    const { blogList } = this.state
    const result = await this.BlogServer.fetchArticleList(currentPage, queryCondition)

    this.setState({
      blogList: [...blogList, ...result.list],
      pageCount: result.pageCount,
      currentPage: result.currentPage,
    })
  }
  loadMore = async () => {
    const { currentPage } = this.state;

    try {
      await this.fetchBlogList(+currentPage + 1)
    } catch (err) {
      console.log(err)
    }
  }
  renderBlogItem = () => {
    const { blogList } = this.state

    return blogList.map(item => (
      <BlogItem
        key={item.slug}
        title={item.title}
        mediaUrl={item.illustration}
        slug={item.slug}
        digest={item.digest} />
    ))
  }

  render() {
    const { currentPage, pageCount } = this.state;
    return(
      <BlogContainer contentClass="blog-list-wrapper">
        <section className="blog-list-container">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={currentPage < pageCount}
            loader={<div className="loader" key={0}>努力加载中 ...</div>}
            useWindow={false}
          >
            {this.renderBlogItem()}
          </InfiniteScroll>
          </section>
      </BlogContainer>
    )
  }
}
