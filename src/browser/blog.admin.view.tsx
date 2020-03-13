import * as React from 'react';
import { Value ***REMOVED*** from '@malagu/core/lib/common/annotation/detached';
import { ENDPOINT ***REMOVED*** from '@malagu/web';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';
const ReactMarkdown = require('react-markdown/with-html');

interface Prop {***REMOVED***
interface State {
  blogList: DouMiBlog.ArticleBrief[],
  pageCount: number,
  currentPage: number,
  blogContent: string,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
***REMOVED***

@View('/blog/admin/index')
export default class BlogAdmin extends React.Component<Prop, State> {

  @Value(ENDPOINT)
  protected readonly endpoint: string;

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = {
      blogList: [],
      pageCount: 1,
      currentPage: 1,
      isOpenSnackbar: false,
      snackbarMsg: '',
      blogContent: ''
    ***REMOVED***
***REMOVED***
  async componentDidMount() {
    await this.fetchBlogList(this.state.currentPage);
***REMOVED***
  fetchBlogList = async (currentPage: number) => {
    const { blogList ***REMOVED*** = this.state;
    let result;
  ***REMOVED***
      result = await this.BlogServer.fetchArticleList(currentPage);
  ***REMOVED*** catch (err) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博客列表失败，请稍后重试'
      ***REMOVED***
  ***REMOVED***
  ***REMOVED***

    this.setState({
      blogList: [...blogList, ...result.list],
      pageCount: result.pageCount,
      currentPage: result.currentPage,
    ***REMOVED***

    if (result.list.length > 0 && +currentPage === 1) {
      this.fetchBlogDetail(result.list[0].slug);
  ***REMOVED***
  ***REMOVED***
  fetchBlogDetail = async (slug: string) => {
    const detail = await this.BlogServer.fetchArticleDetail(slug);

    this.setState({
      blogContent: detail.content
    ***REMOVED***
  ***REMOVED***
  loadMore = async () => {
    const { currentPage ***REMOVED*** = this.state;

    await this.fetchBlogList(+currentPage + 1);
  ***REMOVED***
  renderBlogItem = () => {
    const { blogList ***REMOVED*** = this.state;

    return blogList.map(item => (
      <BlogItemCard
        key={item.slug***REMOVED***
        {...item***REMOVED***
        onClick={() => this.fetchBlogDetail(item.slug)***REMOVED***
        onEdit={slug => {
          location.hash=`/blog/admin/editor?slug=${slug***REMOVED***`;
      ***REMOVED******REMOVED***
      />
    ));
  ***REMOVED***
  render() {
    const { pageCount, currentPage, blogContent, isOpenSnackbar, snackbarMsg ***REMOVED*** = this.state;
    return(
      <BlogContainer
        endpoint={this.endpoint***REMOVED***
        isLogin
        contentClass="blog-admin-container"
        isOpenSnackbar={isOpenSnackbar***REMOVED***
        snackbarMsg={snackbarMsg***REMOVED***
      >
        <div className="blog-admin-wrapper">
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
          <section className="blog-content">
            <ReactMarkdown
              source={blogContent***REMOVED***
              escapeHtml={false***REMOVED***
              renderers={{ code: CodeBlock ***REMOVED******REMOVED***
              className="blog-preview-text"
            />
          </section>
        </div>
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
