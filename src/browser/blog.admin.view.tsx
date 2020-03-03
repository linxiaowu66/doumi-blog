import * as React from 'react';
import { Value } from '@malagu/core/lib/common/annotation/detached';
import { ENDPOINT } from '@malagu/web';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';
import { View } from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';
const ReactMarkdown = require('react-markdown/with-html');

interface Prop {}
interface State {
  blogList: DouMiBlog.ArticleBrief[],
  pageCount: number,
  currentPage: number,
  blogContent: string,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
}

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
    };
  }
  async componentDidMount() {
    await this.fetchBlogList(this.state.currentPage);
  }
  fetchBlogList = async (currentPage: number) => {
    const { blogList } = this.state;
    let result;
    try {
      result = await this.BlogServer.fetchArticleList(currentPage);
    } catch (err) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博客列表失败，请稍后重试'
      });
      return;
    }

    this.setState({
      blogList: [...blogList, ...result.list],
      pageCount: result.pageCount,
      currentPage: result.currentPage,
    });

    if (result.list.length > 0 && +currentPage === 1) {
      this.fetchBlogDetail(result.list[0].slug);
    }
  };
  fetchBlogDetail = async (slug: string) => {
    const detail = await this.BlogServer.fetchArticleDetail(slug);

    this.setState({
      blogContent: detail.content
    });
  };
  loadMore = async () => {
    const { currentPage } = this.state;

    await this.fetchBlogList(+currentPage + 1);
  };
  renderBlogItem = () => {
    const { blogList } = this.state;

    console.log(blogList);

    return blogList.map(item => (
      <BlogItemCard
        key={item.slug}
        {...item}
        onClick={() => this.fetchBlogDetail(item.slug)}
        onEdit={slug => {
          location.hash=`/blog/admin/editor?slug=${slug}`;
        }}
      />
    ));
  };
  render() {
    const { pageCount, currentPage, blogContent, isOpenSnackbar, snackbarMsg } = this.state;
    return(
      <BlogContainer
        endpoint={this.endpoint}
        isLogin
        contentClass="blog-admin-container"
        isOpenSnackbar={isOpenSnackbar}
        snackbarMsg={snackbarMsg}
      >
        <div className="blog-admin-wrapper">
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
          <section className="blog-content">
            <ReactMarkdown
              source={blogContent}
              escapeHtml={false}
              renderers={{ code: CodeBlock }}
              className="blog-preview-text"
            />
          </section>
        </div>
      </BlogContainer>
    );
  }
}
