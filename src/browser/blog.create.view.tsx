import * as React from 'react'
import axios from 'axios';
import * as ReactMarkdown from 'react-markdown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BlogContainer from './components/blogContainer';
import { Create, List, Settings } from '@material-ui/icons'
import { View } from '@malagu/react/lib/browser';
import CodeBlock from './components/codeBlock';
import BlogConfig from './components/blogSetting';

import './styles/blog.admin.less';

interface Prop {}
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
}

const navigatorList = [{
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/create'
}, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin'
}]

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
    }
  }
  async componentWillMount() {
    try {
      const slug = (this.props as any).match.params.slug

      if (slug) {
        this.setState({
          editMode: true
        })
        await this.fetchBlogDetail(slug)
      }
    } catch (err) {
      console.log(err)
    }
  }
  fetchBlogDetail = async (slug: string) => {
    const result = await axios.get(`/api/blog/detail?slug=${slug}`)

    this.setState({
      blogContent: result.data.content,
      blogTags: result.data.tags,
      blogArchiveTime: result.data.archiveTime,
      blogCategory: result.data.category,
      blogStatus: result.data.articleStatus
    })
  }
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      blogContent: event.target.value
    });
  };
  handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }
  handleCloseMenu = () => {
    this.setState({
      anchorEl: null
    })
  }
  render() {
    const { blogContent, anchorEl, showSetting } = this.state
    return(
      <BlogContainer navigatorList={navigatorList} isLogin contentClass="blog-editor-wrapper" >
        <header className="blog-title">
          <TextField
            id="outlined-helperText"
            label="文章标题"
            type="text"
            variant="outlined"
            fullWidth
          />
          <Settings className="toggle-setting" onClick={() => this.setState({ showSetting: true })} color="primary" />
          <Button
            className="toggle-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleOpenMenu} variant="contained" color="primary">
            操作博文
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleCloseMenu}
          >
            <MenuItem>保存草稿</MenuItem>
            <MenuItem>发布博文</MenuItem>
            <MenuItem>删除博文</MenuItem>
          </Menu>
        </header>
        <div className="blog-admin-container">
          <section className="blog-editor">
            <textarea spellCheck='true' className='markdown-realtext' onChange={this.handleChange}>{blogContent}</textarea>
          </section>
          <section className="blog-preview">
            <ReactMarkdown
              source={blogContent}
              renderers={{ code: CodeBlock }}
              className="blog-preview-text"
            />
          </section>
        </div>
        <BlogConfig isOpen={showSetting} closeCb={() => this.setState({ showSetting: false })}/>
      </BlogContainer>
    )
  }
}
