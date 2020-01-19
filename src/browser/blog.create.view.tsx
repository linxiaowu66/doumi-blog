import * as React from 'react'
import axios from 'axios';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer } from '../common/blog-protocol'
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

interface ConfigProps { digest: string, illustration: string, tags: string[], archiveTime: string, category: string}
interface Prop {}
interface State {
  editMode: boolean,
  blogContent: string,
  blogDigest: string,
  blogIllustration: string,
  blogTitle: string,
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

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = {
      editMode: false,
      blogContent: '',
      blogDigest: '',
      blogTitle: '',
      blogIllustration: '',
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

      const [tagsList, catList] = await Promise.all([
        this.BlogServer.fetchTagsList(),
        this.BlogServer.fetchCatsList()
      ])

      this.setState({
        tags: tagsList.map(item => item.name),
        categories: catList.map(item => item.name),
      })

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
      blogTitle: result.data.title,
      blogIllustration: result.data.illustration,
      blogDigest: result.data.digest,
      blogTags: result.data.tags,
      blogArchiveTime: result.data.archiveTime,
      blogCategory: result.data.category,
      blogStatus: result.data.articleStatus
    })
  }
  handleSubmit = async(actionType: string) => {
    const { blogTitle: title, blogContent: content, blogArchiveTime: archiveTime, blogTags, blogCategory, blogDigest, blogIllustration } = this.state;

    const result = await axios.post('/api/blog', {
        title,
        content,
        archiveTime,
        tags: blogTags,
        category: blogCategory,
        digest: blogDigest,
        illustration: blogIllustration,
        articleStatus: actionType
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
  handleSaveConfig = (data: ConfigProps) => {
    this.setState({
      blogArchiveTime: data.archiveTime,
      showSetting: false,
      blogIllustration: data.illustration,
      blogCategory: data.category,
      blogTags: data.tags,
      blogDigest: data.digest
     })
  }
  render() {
    const { blogContent, anchorEl, showSetting, tags, categories } = this.state
    return(
      <BlogContainer navigatorList={navigatorList} isLogin contentClass="blog-editor-wrapper" >
        <header className="blog-title">
          <TextField
            id="outlined-helperText"
            label="文章标题"
            type="text"
            variant="outlined"
            fullWidth
            onChange={e => this.setState({ blogTitle: e.target.value})}
          />
          <Settings className="toggle-setting" onClick={() => this.setState({ showSetting: true })} color="primary" />
          <Button
            className="toggle-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleOpenMenu} variant="contained" color="primary">
            博文操作
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleCloseMenu}
          >
            <MenuItem onClick={() => this.handleSubmit('draft')}>保存草稿</MenuItem>
            <MenuItem onClick={() => this.handleSubmit('published')}>发布博文</MenuItem>
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
        <BlogConfig
          isOpen={showSetting}
          closeCb={this.handleSaveConfig}
          tags={tags}
          cats={categories}
        />
      </BlogContainer>
    )
  }
}
