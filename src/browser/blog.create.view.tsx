import * as React from 'react'
import axios from 'axios';
import * as ReactMarkdown from 'react-markdown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BlogContainer from './components/blogContainer';
import { Create, List, Settings ***REMOVED*** from '@material-ui/icons'
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import CodeBlock from './components/codeBlock';
import BlogConfig from './components/blogSetting';

import './styles/blog.admin.less';

interface Prop {***REMOVED***
interface State {
  editMode: boolean,
  blogContent: string,
  blogTags: string[],
  blogCategory: string,
  blogStatus: 'draft' | 'published',
  blogArchiveTime: string,
  anchorEl: null | Element,
  showSetting: boolean,
  tags: string[], // 后端存储的当前所有标签
  categories: string[] // 后端存储的当前所有分类
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

@View('/blog/admin/editor')
export default class BlogAdminEditor extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);

    this.state = {
      editMode: false,
      blogContent: '',
      blogTags: [],
      blogCategory: '',
      blogArchiveTime: '',
      blogStatus: 'draft',
      tags: [],
      categories: [],
      anchorEl: null,
      showSetting: false,
  ***REMOVED***
***REMOVED***
  async componentWillMount() {
  ***REMOVED***
      const slug = (this.props as any).match.params.slug

      if (slug) {
        this.setState({
          editMode: true
      ***REMOVED***)
        await this.fetchBlogDetail(slug)
    ***REMOVED***
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***
***REMOVED***
  fetchBlogDetail = async (slug: string) => {
    const result = await axios.get(`/api/blog/detail?slug=${slug***REMOVED***`)

    this.setState({
      blogContent: result.data.content,
      blogTags: result.data.tags,
      blogArchiveTime: result.data.archiveTime,
      blogCategory: result.data.category,
      blogStatus: result.data.articleStatus
  ***REMOVED***)
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
  render() {
    const { blogContent, anchorEl, showSetting ***REMOVED*** = this.state
    return(
      <BlogContainer navigatorList={navigatorList***REMOVED*** isLogin contentClass="blog-editor-wrapper" >
        <header className="blog-title">
          <TextField
            id="outlined-helperText"
            label="文章标题"
            type="text"
            variant="outlined"
            fullWidth
          />
          <Settings className="toggle-setting" onClick={() => this.setState({ showSetting: true ***REMOVED***)***REMOVED*** color="primary" />
          <Button
            className="toggle-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleOpenMenu***REMOVED*** variant="contained" color="primary">
            操作博文
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl***REMOVED***
            keepMounted
            open={Boolean(anchorEl)***REMOVED***
            onClose={this.handleCloseMenu***REMOVED***
          >
            <MenuItem>保存草稿</MenuItem>
            <MenuItem>发布博文</MenuItem>
            <MenuItem>删除博文</MenuItem>
          </Menu>
        </header>
        <div className="blog-admin-container">
          <section className="blog-editor">
            <textarea spellCheck='true' className='markdown-realtext' onChange={this.handleChange***REMOVED***>{blogContent***REMOVED***</textarea>
          </section>
          <section className="blog-preview">
            <ReactMarkdown
              source={blogContent***REMOVED***
              renderers={{ code: CodeBlock ***REMOVED******REMOVED***
              className="blog-preview-text"
            />
          </section>
        </div>
        <BlogConfig isOpen={showSetting***REMOVED*** closeCb={() => this.setState({ showSetting: false ***REMOVED***)***REMOVED***/>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
