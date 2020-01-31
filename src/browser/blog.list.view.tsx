import * as React from 'react'
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

interface Prop {***REMOVED***
interface State {
  blogList: {title: string, digest: string, slug: string, illustration: string***REMOVED***[],
  pageCount: number,
  currentPage: number,
***REMOVED***

@View('/blog')
export default class BlogList extends React.Component<Prop, State> {

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(prop: Prop) {
    super(prop);
    this.state = {
      blogList: [],
      pageCount: 1,
      currentPage: 1,
    ***REMOVED***
***REMOVED***

  async componentWillMount() {
  ***REMOVED***
      await this.fetchBlogList(this.state.currentPage)
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***
***REMOVED***
  fetchBlogList = async (currentPage: number) => {
    const { blogList ***REMOVED*** = this.state
    const result = await this.BlogServer.fetchArticleList(currentPage)

    this.setState({
      blogList: [...blogList, ...result.list],
      pageCount: result.pageCount,
      currentPage: result.currentPage,
  ***REMOVED***)
***REMOVED***
  loadMore = async () => {
    const { currentPage ***REMOVED*** = this.state;

  ***REMOVED***
      await this.fetchBlogList(+currentPage + 1)
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***
***REMOVED***
  renderBlogItem = () => {
    const { blogList ***REMOVED*** = this.state

    return blogList.map(item => (
      <BlogItem
        key={item.slug***REMOVED***
        title={item.title***REMOVED***
        mediaUrl={item.illustration***REMOVED***
        digest={item.digest***REMOVED*** />
    ))
***REMOVED***

  render() {
    const { currentPage, pageCount ***REMOVED*** = this.state;
    return(
      <BlogContainer contentClass="blog-list-wrapper">
        <section className="blog-list-container">
          <InfiniteScroll
            pageStart={0***REMOVED***
            loadMore={this.loadMore***REMOVED***
            hasMore={currentPage < pageCount***REMOVED***
            loader={<div className="loader" key={0***REMOVED***>努力加载中 ...</div>***REMOVED***
            useWindow={false***REMOVED***
          >
            {this.renderBlogItem()***REMOVED***
          </InfiniteScroll>
          </section>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
