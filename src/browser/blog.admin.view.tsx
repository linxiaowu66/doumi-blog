import * as React from 'react'
import { Value } from '@malagu/core/lib/common/annotation/detached'
import { ENDPOINT } from '@malagu/web';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol'
import * as InfiniteScroll from 'react-infinite-scroller';
import Snackbar from '@material-ui/core/Snackbar';
import BlogContainer from './components/blogContainer';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from './components/codeBlock';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import { View } from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';

interface Prop {}
interface State {
  blogList: DouMiBlog.ArticleBrief[],
  pageCount: number,
  currentPage: number,
  blogContent: string,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
}

const navigatorList = [{
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/editor'
}, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin/index'
}]

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
    }
  }
  async componentWillMount() {
    try {
      await this.fetchBlogList(this.state.currentPage)
    } catch (err) {
      console.log(err)
    }
  }
  fetchBlogList = async (currentPage: number) => {
    const { blogList } = this.state
    const result = await this.BlogServer.fetchArticleList(currentPage);

    this.setState({
      blogList: [...blogList, ...result.list],
      pageCount: result.pageCount,
      currentPage: result.currentPage,
    })

    if (result.list.length > 0 && +currentPage === 1) {
      this.fetchBlogDetail(result.list[0].slug)
    }
  }
  fetchBlogDetail = async (slug: string) => {
    const detail = await this.BlogServer.fetchArticleDetail(slug);

    this.setState({
      blogContent: detail.content
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
      <BlogItemCard
        key={item.slug}
        {...item}
        onClick={() => this.fetchBlogDetail(item.slug)}
        onEdit={(slug) => {
          location.hash=`/blog/admin/editor?slug=${slug}`
        }}
      />
    ))
  }
  render() {
    const { pageCount, currentPage, blogContent, isOpenSnackbar, snackbarMsg } = this.state;
    return(
      <BlogContainer endpoint={this.endpoint} navigatorList={navigatorList} isLogin contentClass="blog-admin-container">
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
              renderers={{ code: CodeBlock }}
              className="blog-preview-text"
            />
          </section>
        </div>
        <Snackbar
          autoHideDuration={1500}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          key={'top,right'}
          open={isOpenSnackbar}
          onClose={() => this.setState({ isOpenSnackbar: false })}
          message={snackbarMsg}
        />
      </BlogContainer>
    )
  }
}
