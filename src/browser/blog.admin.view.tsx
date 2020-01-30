import * as React from 'react'
import axios from 'axios';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from './components/codeBlock';
import { Create, List } from '@material-ui/icons'
import { View } from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';

interface Prop {}
interface State {
  blogList: {title: string, archiveTime: string, category: string, tags: string[], slug: string, content: string}[],
  pageCount: number,
  currentPage: number,
  blogContent: string
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
  constructor(props: Prop) {
    super(props);

    this.state = {
      blogList: [],
      pageCount: 1,
      currentPage: 1,
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
    const result = await axios.get(`/api/blog/list?currentPage=${currentPage}`)

    this.setState({
      blogList: [...blogList, ...result.data.list],
      pageCount: result.data.pageCount,
      currentPage: result.data.currentPage,
    })

    if (result.data.list.length > 0 && +currentPage === 1) {
      this.setState({
        blogContent: result.data.list[0].content
      })
    }
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
        onClick={(content) => this.setState({ blogContent: content })}
        onEdit={(slug) => {
          location.hash=`/blog/admin/editor?slug=${slug}`
        }}
      />
    ))
  }
  render() {
    const { pageCount, currentPage, blogContent } = this.state;
    return(
      <BlogContainer navigatorList={navigatorList} isLogin contentClass="blog-admin-container">
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
      </BlogContainer>
    )
  }
}
