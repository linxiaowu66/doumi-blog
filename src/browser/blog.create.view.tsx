import * as React from 'react'
import axios from 'axios';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import { Create, List ***REMOVED*** from '@material-ui/icons'
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';

interface Prop {***REMOVED***
interface State {
  blogList: {title: string, archiveTime: string, category: string, tags: string[]***REMOVED***[],
  pageCount: number,
  currentPage: number,
  blogContent: string
***REMOVED***

const navigatorList = [{
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/create'
***REMOVED***, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin'
***REMOVED***]

@View('/blog/admin/editor/:slug')
export default class BlogAdminEditor extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);

    this.state = {
      blogList: [],
      pageCount: 1,
      currentPage: 1,
      blogContent: ''
  ***REMOVED***
***REMOVED***
  async componentWillMount() {
  ***REMOVED***
      const slug = (this.props as any).match.params.slug

      if (slug) {

    ***REMOVED***
      await this.fetchBlogList(this.state.currentPage)
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***
***REMOVED***
  fetchBlogList = async (currentPage: number) => {
    const result = await axios.get(`/api/blog/list?currentPage=${currentPage***REMOVED***`)

    this.setState({
      blogList: result.data.list,
      pageCount: result.data.pageCount,
      currentPage: result.data.currentPage
  ***REMOVED***)
***REMOVED***
  loadMore = async () => {
    const { currentPage ***REMOVED*** = this.state;

  ***REMOVED***
      await this.fetchBlogList(currentPage + 1)
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***
***REMOVED***
  renderBlogItem = () => {
    const { blogList ***REMOVED*** = this.state

    return blogList.map(item => (
      <BlogItemCard {...item***REMOVED*** />
    ))
***REMOVED***
  render() {
    const { pageCount, currentPage ***REMOVED*** = this.state;
    return(
      <BlogContainer navigatorList={navigatorList***REMOVED*** isLogin >
        <div className="blog-admin-container">
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

          </section>
        </div>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
