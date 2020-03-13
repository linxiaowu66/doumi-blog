import * as React from 'react';
import * as query from 'query-string';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import InfiniteScroll from 'react-infinite-scroller';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BlogContainer from './components/blogContainer';
import { View } from '@malagu/react/lib/browser';
import BlogItem from './components/blogItem';

import './styles/blog.list.less';

interface Prop {}
interface State {
  blogList: {title: string, digest: string, slug: string, illustration: string}[],
  pageCount: number,
  currentPage: number,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
  open: boolean,
}

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
    };
  }

  async componentDidMount() {
    await this.fetchBlogList(this.state.currentPage);
  }
  bindScroll = (event: any) => {
    // 滚动的高度
    const scrollTop = event.srcElement.documentElement.scrollTop;
    window.localStorage.setItem('doumi-blog-list', scrollTop);
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindScroll);
  }
  fetchBlogList = async (currentPage: number) => {
    try {
      const { queryTag, queryArch, queryCat } = query.parse((this.props as any).location.search);
      let queryCondition: DouMiBlog.QueryCondition = { articleStatus: 'published' };
      if (queryTag) {
        queryCondition = { ...queryCondition, queryTag: +queryTag };
      }
      if (queryArch) {
        queryCondition = { ...queryCondition, queryArch: +queryArch };
      }
      if (queryCat) {
        queryCondition = { ...queryCondition, queryCat: +queryCat };
      }
      const { blogList } = this.state;
      const result = await this.BlogServer.fetchArticleList(currentPage, queryCondition);

      this.setState({
        blogList: [...blogList, ...result.list],
        pageCount: result.pageCount,
        currentPage: result.currentPage,
        open: false,
      }, () => {
        if (currentPage === this.state.pageCount) {
          const top = window.localStorage.getItem('doumi-blog-list');
          if (top) {
            window.scrollTo({ top: +top, behavior: 'smooth' });
          }
          window.addEventListener('scroll', this.bindScroll);
        }
      });
    } catch (err) {
      console.log(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取列表失败，请稍后重试',
      });
    }
  };
  loadMore = async () => {
    // 这里的loadMore貌似没有什么作用，页面加载好了之后会一次性拉取所有的数据！
    const { currentPage } = this.state;

    await this.fetchBlogList(+currentPage + 1);
  };
  renderBlogItem = () => {
    const { blogList } = this.state;

    return blogList.map(item => (
      <BlogItem
        key={item.slug}
        title={item.title}
        mediaUrl={item.illustration}
        slug={item.slug}
        digest={item.digest} />
    ));
  };

  render() {
    const { currentPage, pageCount, isOpenSnackbar, snackbarMsg, open } = this.state;
    return(
      <BlogContainer
        contentClass="blog-list-wrapper"
        isOpenSnackbar={isOpenSnackbar}
        snackbarMsg={snackbarMsg}
      >
        {
          !open ? <section className="blog-list-container" ref={ref => this.blogListContainer = ref}>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMore}
              hasMore={currentPage < pageCount}
              loader={<div className="loader" key={0}>努力加载中 ...</div>}
              useWindow={false}
            >
              {this.renderBlogItem()}
            </InfiniteScroll>
          </section> : <Backdrop className='loading' open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      </BlogContainer>
    );
  }
}
