import * as React from 'react';
import * as query from 'query-string';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import InfiniteScroll from 'react-infinite-scroller';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BlogContainer from './components/blogContainer';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

import './styles/blog.list.less';
import BlogSummary from './components/blogSummary';

interface Prop {***REMOVED***
interface State {
  blogList: {title: string, digest: string, slug: string, illustration: string***REMOVED***[],
  pageCount: number,
  currentPage: number,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
  open: boolean,
  data: DouMiBlog.SummaryStats
***REMOVED***

@View('/blog/list')
export default class BlogList extends React.Component<Prop, State> {

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  protected blogListContainer: any;

  constructor(prop: Prop) {
    super(prop);
    this.state = {
      blogList: [],
      pageCount: 1,
      currentPage: 1,
      isOpenSnackbar: false,
      snackbarMsg: '',
      open: true,
      data: {
        totalPv: 0,
        commentsNum: 0,
        operationDays: '',
        articleCount: 0,
        articlesWordsNum: ''
    ***REMOVED***
    ***REMOVED***
***REMOVED***

  async componentDidMount() {
    await this.fetchBlogList(this.state.currentPage);
    const result = await this.BlogServer.fetchSummaryStats();
    this.setState({
      data: result
    ***REMOVED***
***REMOVED***
  bindScroll = (event: any) => {
    // 滚动的高度
    const scrollTop = event.srcElement.documentElement.scrollTop;
    window.localStorage.setItem('doumi-blog-list', scrollTop);
  ***REMOVED***
  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindScroll);
***REMOVED***
  fetchBlogList = async (currentPage: number) => {
  ***REMOVED***
      const { queryTag, queryArch, queryCat ***REMOVED*** = query.parse((this.props as any).location.search);
      let queryCondition: DouMiBlog.QueryCondition = { articleStatus: 'published' ***REMOVED***
      if (queryTag) {
        queryCondition = { ...queryCondition, queryTag: +queryTag ***REMOVED***
    ***REMOVED***
      if (queryArch) {
        queryCondition = { ...queryCondition, queryArch: +queryArch ***REMOVED***
    ***REMOVED***
      if (queryCat) {
        queryCondition = { ...queryCondition, queryCat: +queryCat ***REMOVED***
    ***REMOVED***
      const { blogList ***REMOVED*** = this.state;
      const result = await this.BlogServer.fetchArticleList(currentPage, queryCondition);

      this.setState({
        blogList: [...blogList, ...result.list],
        pageCount: result.pageCount,
        currentPage: result.currentPage,
        open: false,
    ***REMOVED***, () => {
        if (currentPage === this.state.pageCount) {
          const top = window.localStorage.getItem('doumi-blog-list');
          if (top) {
            window.scrollTo({ top: +top, behavior: 'smooth' ***REMOVED***
        ***REMOVED***
          window.addEventListener('scroll', this.bindScroll);
      ***REMOVED***
      ***REMOVED***
  ***REMOVED*** catch (err) {
      console.log(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取列表失败，请稍后重试',
      ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  loadMore = async () => {
    // 这里的loadMore貌似没有什么作用，页面加载好了之后会一次性拉取所有的数据！
    const { currentPage ***REMOVED*** = this.state;

    await this.fetchBlogList(+currentPage + 1);
  ***REMOVED***
  renderBlogItem = () => {
    const { blogList ***REMOVED*** = this.state;

    return blogList.map(item => (
      <BlogItem
        key={item.slug***REMOVED***
        title={item.title***REMOVED***
        mediaUrl={item.illustration***REMOVED***
        slug={item.slug***REMOVED***
        digest={item.digest***REMOVED*** />
    ));
  ***REMOVED***

  render() {
    const { currentPage, pageCount, isOpenSnackbar, snackbarMsg, open ***REMOVED*** = this.state;
    return(
      <BlogContainer
        contentClass="blog-list-wrapper"
        isOpenSnackbar={isOpenSnackbar***REMOVED***
        snackbarMsg={snackbarMsg***REMOVED***
      >
        {
          !open ? <section className="blog-list-container" ref={ref => this.blogListContainer = ref***REMOVED***>
            <InfiniteScroll
              pageStart={0***REMOVED***
              loadMore={this.loadMore***REMOVED***
              hasMore={currentPage < pageCount***REMOVED***
              loader={<div className="loader" key={0***REMOVED***>努力加载中 ...</div>***REMOVED***
              useWindow={false***REMOVED***
            >
              {this.renderBlogItem()***REMOVED***
            </InfiniteScroll>
          </section> : <Backdrop className='loading' open={open***REMOVED***>
            <CircularProgress color="inherit" />
          </Backdrop>
      ***REMOVED***
        <BlogSummary data={this.state.data***REMOVED*** />
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
