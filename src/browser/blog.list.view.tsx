import * as React from 'react'
import * as query from 'query-string';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

import './styles/blog.list.less';

interface Prop {***REMOVED***
interface State {
  blogList: {title: string, digest: string, slug: string, illustration: string***REMOVED***[],
  pageCount: number,
  currentPage: number,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
***REMOVED***

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
      isOpenSnackbar: false,
      snackbarMsg: '',
    ***REMOVED***
***REMOVED***

  async componentDidMount() {
    await this.fetchBlogList(this.state.currentPage)
***REMOVED***
  fetchBlogList = async (currentPage: number) => {
  ***REMOVED***
      const { queryTag, queryArch, queryCat ***REMOVED*** = query.parse((this.props as any).location.search)
      let queryCondition = {***REMOVED***
      if (queryTag) {
        queryCondition = { ...queryCondition, queryTag ***REMOVED***
    ***REMOVED***
      if (queryArch) {
        queryCondition = { ...queryCondition, queryArch ***REMOVED***
    ***REMOVED***
      if (queryCat) {
        queryCondition = { ...queryCondition, queryCat ***REMOVED***
    ***REMOVED***
      const { blogList ***REMOVED*** = this.state
      const result = await this.BlogServer.fetchArticleList(currentPage, queryCondition)

      this.setState({
        blogList: [...blogList, ...result.list],
        pageCount: result.pageCount,
        currentPage: result.currentPage,
    ***REMOVED***)
  ***REMOVED*** catch (err) {
      console.log(err)
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取列表失败，请稍后重试',
    ***REMOVED***)
  ***REMOVED***
***REMOVED***
  loadMore = async () => {
    const { currentPage ***REMOVED*** = this.state;

    await this.fetchBlogList(+currentPage + 1)
***REMOVED***
  renderBlogItem = () => {
    const { blogList ***REMOVED*** = this.state

    return blogList.map(item => (
      <BlogItem
        key={item.slug***REMOVED***
        title={item.title***REMOVED***
        mediaUrl={item.illustration***REMOVED***
        slug={item.slug***REMOVED***
        digest={item.digest***REMOVED*** />
    ))
***REMOVED***

  render() {
    const { currentPage, pageCount, isOpenSnackbar, snackbarMsg ***REMOVED*** = this.state;
    return(
      <BlogContainer
        contentClass="blog-list-wrapper"
        isOpenSnackbar={isOpenSnackbar***REMOVED***
        snackbarMsg={snackbarMsg***REMOVED***
      >
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
