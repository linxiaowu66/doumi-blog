import * as React from 'react'
import axios from 'axios';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import { Create, List, Label } from '@material-ui/icons'
import { View } from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';

interface Prop {}
interface State {
  blogList: {title: string, archiveTime: string, category: string, tags: string[]}[],
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
}, {
  name: '标签和分类管理',
  icon: <Label />,
  link: '#/blog/admin/management'
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
    const result = await axios.get(`/api/blog/list?currentPage=${currentPage}`)

    this.setState({
      blogList: result.data.list,
      pageCount: result.data.pageCount,
      currentPage: result.data.currentPage
    })
  }
  loadMore = async () => {
    const { currentPage } = this.state;

    try {
      await this.fetchBlogList(currentPage + 1)
    } catch (err) {
      console.log(err)
    }
  }
  renderBlogItem = () => {
    const { blogList } = this.state

    return blogList.map(item => (
      <BlogItemCard {...item} />
    ))
  }
  render() {
    const { pageCount, currentPage } = this.state;
    return(
      <BlogContainer navigatorList={navigatorList} isLogin >
        <div className="blog-admin-container">
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

          </section>
        </div>
      </BlogContainer>
    )
  }
}
