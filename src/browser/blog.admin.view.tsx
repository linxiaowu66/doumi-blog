import * as React from 'react'
import axios from 'axios';
import * as InfiniteScroll from 'react-infinite-scroller';
import BlogContainer from './components/blogContainer';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from './components/codeBlock';
import { Create, List ***REMOVED*** from '@material-ui/icons'
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogItemCard from './components/blogItemCard';

interface Prop {***REMOVED***
interface State {
  blogList: {title: string, archiveTime: string, category: string, tags: string[], slug: string, content: string***REMOVED***[],
  pageCount: number,
  currentPage: number,
  blogContent: string
***REMOVED***

const navigatorList = [{
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/editor'
***REMOVED***, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin/index'
***REMOVED***]

@View('/blog/admin/index')
export default class BlogAdmin extends React.Component<Prop, State> {
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
      currentPage: result.data.currentPage,
      blogContent: result.data.list.length > 0 ? result.data.list[0].content : ''
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
      <BlogItemCard
        key={item.slug***REMOVED***
        {...item***REMOVED***
        onClick={(content) => this.setState({ blogContent: content ***REMOVED***)***REMOVED***
        onEdit={(slug) => {
          location.href=`/blog/admin/editor?slug=${slug***REMOVED***`
      ***REMOVED******REMOVED***
      />
    ))
***REMOVED***
  render() {
    const { pageCount, currentPage, blogContent ***REMOVED*** = this.state;
    return(
      <BlogContainer navigatorList={navigatorList***REMOVED*** isLogin contentClass="blog-admin-container">
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
              renderers={{ code: CodeBlock ***REMOVED******REMOVED***
              className="blog-preview-text"
            />
          </section>
        </div>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
