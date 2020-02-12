import * as React from 'react'
import * as query from 'query-string';
import { Value ***REMOVED*** from '@malagu/core/lib/common/annotation/detached'
import { ENDPOINT ***REMOVED*** from '@malagu/web';
import axios from 'axios';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer ***REMOVED*** from '../common/blog-protocol'
import * as ReactMarkdown from 'react-markdown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BlogContainer from './components/blogContainer';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Settings from '@material-ui/icons/Settings';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import CodeBlock from './components/codeBlock';
import BlogConfig from './components/blogSetting';

import './styles/blog.admin.less';

interface ConfigProps { digest: string, illustration: string, tags: string[], archiveTime: string, category: string***REMOVED***
interface Prop {***REMOVED***
interface State {
  editMode: boolean,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
  blogContent: string,
  blogDigest: string,
  blogIllustration: string,
  blogTitle: string,
  blogTags: string[],
  blogCategory: string,
  blogStatus: 'draft' | 'published',
  blogArchiveTime: string,
  slug: string,
  anchorEl: null | Element,
  showSetting: boolean,
  tags: string[], // 后端存储的当前所有标签
  categories: string[] // 后端存储的当前所有分类
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
const initData = {
  editMode: false,
  isOpenSnackbar: false,
  snackbarMsg: '',
  blogContent: '',
  blogDigest: '',
  blogTitle: '',
  blogIllustration: '',
  blogTags: [],
  blogCategory: '',
  blogArchiveTime: '',
  slug: '',
  blogStatus: 'draft' as 'draft',
  anchorEl: null,
  showSetting: false,
***REMOVED***
@View('/blog/admin/editor')
export default class BlogAdminEditor extends React.Component<Prop, State> {
  @Value(ENDPOINT)
  protected readonly endpoint: string;

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = { ...initData, tags: [], categories: []***REMOVED***
***REMOVED***
  async componentDidMount() {
  ***REMOVED***
      const { slug ***REMOVED*** = query.parse((this.props as any).location.search)

      const [tagsList, catList] = await Promise.all([
        this.BlogServer.fetchTagsList(),
        this.BlogServer.fetchCatsList()
      ])

      this.setState({
        tags: tagsList.map(item => item.name),
        categories: catList.map(item => item.name),
    ***REMOVED***)

      if (slug) {
        this.setState({
          editMode: true,
          slug: slug as string
      ***REMOVED***)
        await this.fetchBlogDetail(slug as  string)
    ***REMOVED***
  ***REMOVED*** catch (err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博客信息失败，请稍后再试',
    ***REMOVED***)
  ***REMOVED***
***REMOVED***
  static getDerivedStateFromProps(nextProps: Prop, prevState: State) {
    const { slug ***REMOVED*** = query.parse((nextProps as any).location.search)
    if (prevState.slug && !slug) {
      return initData
  ***REMOVED***
    return null
***REMOVED***
  componentDidUpdate() {
    this.fetchBlogDetail(this.state.slug as string);
***REMOVED***
  fetchBlogDetail = async (slug: string) => {
  ***REMOVED***
      const result = await this.BlogServer.fetchArticleDetail(slug);

      this.setState({
        blogContent: result.content,
        blogTitle: result.title,
        blogIllustration: result.illustration,
        blogDigest: result.digest,
        blogTags: result.tags,
        blogArchiveTime: result.archiveTime,
        blogCategory: result.category,
        blogStatus: result.articleStatus
    ***REMOVED***)
  ***REMOVED*** catch (err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博客详情失败，请稍后再试',
    ***REMOVED***)
  ***REMOVED***
***REMOVED***
  handleSubmit = async(actionType: string) => {
    const { blogTitle: title, blogContent: content, blogArchiveTime: archiveTime, blogTags, blogCategory, blogDigest, blogIllustration, editMode ***REMOVED*** = this.state;

    const postBody = {
      title,
      content,
      archiveTime,
      tags: blogTags,
      category: blogCategory,
      digest: blogDigest,
      illustration: blogIllustration,
      articleStatus: actionType
  ***REMOVED***

    const result = editMode ? await axios.put(`${this.endpoint ? this.endpoint : ''***REMOVED***/api/blog`, { ...postBody, slug: this.state.slug ***REMOVED***, {withCredentials: true***REMOVED***): await axios.post(`${this.endpoint ? this.endpoint : ''***REMOVED***/api/blog`, postBody, {withCredentials: true***REMOVED***)

    if (result.data.status && result.data.data) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: result.data.data.msg
    ***REMOVED***)
      if (!editMode) {
        this.setState({
          editMode: true,
          slug: result.data.data.slug
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED*** else {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '保存博文失败，请稍后再试',
    ***REMOVED***)
  ***REMOVED***
***REMOVED***
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      blogContent: event.target.value
    ***REMOVED***
  ***REMOVED***
  handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: event.currentTarget
  ***REMOVED***)
***REMOVED***
  handleCloseMenu = () => {
    this.setState({
      anchorEl: null
  ***REMOVED***)
***REMOVED***
  handleSaveConfig = (data: ConfigProps) => {
    this.setState({
      blogArchiveTime: data.archiveTime,
      showSetting: false,
      blogIllustration: data.illustration,
      blogCategory: data.category,
      blogTags: data.tags,
      blogDigest: data.digest
   ***REMOVED***)
***REMOVED***
  render() {
    const { blogContent, anchorEl, showSetting, tags, categories, isOpenSnackbar, snackbarMsg ***REMOVED*** = this.state
    return(
      <BlogContainer
        endpoint={this.endpoint***REMOVED***
        navigatorList={navigatorList***REMOVED***
        isLogin
        contentClass="blog-editor-wrapper"
        isOpenSnackbar={isOpenSnackbar***REMOVED***
        snackbarMsg={snackbarMsg***REMOVED***
      >
        <header className="blog-title">
          <TextField
            id="outlined-helperText"
            label="文章标题"
            type="text"
            variant="outlined"
            fullWidth
            value={this.state.blogTitle***REMOVED***
            onChange={e => this.setState({ blogTitle: e.target.value***REMOVED***)***REMOVED***
          />
          <Settings className="toggle-setting" onClick={() => this.setState({ showSetting: true ***REMOVED***)***REMOVED*** color="primary" />
          <Button
            className="toggle-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleOpenMenu***REMOVED*** variant="contained" color="primary">
            博文操作
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl***REMOVED***
            keepMounted
            open={Boolean(anchorEl)***REMOVED***
            onClose={this.handleCloseMenu***REMOVED***
          >
            <MenuItem onClick={() => this.handleSubmit('draft')***REMOVED***>保存草稿</MenuItem>
            <MenuItem onClick={() => this.handleSubmit('published')***REMOVED***>发布博文</MenuItem>
            <MenuItem>删除博文</MenuItem>
          </Menu>
        </header>
        <div className="blog-editor-container">
          <section className="blog-editor">
            <textarea spellCheck='true' value={this.state.blogContent***REMOVED*** className='markdown-realtext' onChange={this.handleChange***REMOVED***>{blogContent***REMOVED***</textarea>
          </section>
          <section className="blog-preview">
            <ReactMarkdown
              source={blogContent***REMOVED***
              renderers={{ code: CodeBlock ***REMOVED******REMOVED***
              className="blog-preview-text"
            />
          </section>
        </div>
        <BlogConfig
          isOpen={showSetting***REMOVED***
          closeCb={this.handleSaveConfig***REMOVED***
          tags={tags***REMOVED***
          cats={categories***REMOVED***
          initData={{
            tags: this.state.blogTags,
            cat: this.state.blogCategory,
            archiveTime: this.state.blogArchiveTime,
            illustration: this.state.blogIllustration,
            digest: this.state.blogDigest,
        ***REMOVED******REMOVED***
        />
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
