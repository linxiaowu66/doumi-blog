import * as React from 'react'
import * as query from 'query-string';
import { Value } from '@malagu/core/lib/common/annotation/detached'
import { ENDPOINT } from '@malagu/web';
import axios from 'axios';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import Snackbar from '@material-ui/core/Snackbar';
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

@View('/blog/admin/editor')
export default class BlogAdminEditor extends React.Component<Prop, State> {
  @Value(ENDPOINT)
  protected readonly endpoint: string;

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = {
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
      blogStatus: 'draft',
      tags: [],
      categories: [],
      anchorEl: null,
      showSetting: false,
    }
  }
  async componentWillMount() {
    try {
      const { slug } = query.parse((this.props as any).location.search)

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
          editMode: true,
          slug: slug as string
        })
        await this.fetchBlogDetail(slug as  string)
      }
    } catch (err) {
      console.log(err)
    }
  }
  fetchBlogDetail = async (slug: string) => {
    const result = await axios.get(`${this.endpoint ? this.endpoint : ''}/api/blog/detail?slug=${slug}`, {withCredentials: true})

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
    const { blogTitle: title, blogContent: content, blogArchiveTime: archiveTime, blogTags, blogCategory, blogDigest, blogIllustration, editMode } = this.state;

    const postBody = {
      title,
      content,
      archiveTime,
      tags: blogTags,
      category: blogCategory,
      digest: blogDigest,
      illustration: blogIllustration,
      articleStatus: actionType
    }
    const result = editMode ? await axios.put(`${this.endpoint ? this.endpoint : ''}/api/blog`, { ...postBody, slug: this.state.slug }, {withCredentials: true}): await axios.post(`${this.endpoint ? this.endpoint : ''}/api/blog`, postBody, {withCredentials: true})

    if (result.data.status && result.data.data) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: result.data.data.msg
      })
      if (!editMode) {
        this.setState({
          editMode: true,
          slug: result.data.data.slug
        })
      }
    }
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
    const { blogContent, anchorEl, showSetting, tags, categories, isOpenSnackbar, snackbarMsg } = this.state
    return(
      <BlogContainer endpoint={this.endpoint} navigatorList={navigatorList} isLogin contentClass="blog-editor-wrapper" >
        <header className="blog-title">
          <TextField
            id="outlined-helperText"
            label="文章标题"
            type="text"
            variant="outlined"
            fullWidth
            value={this.state.blogTitle}
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
        <div className="blog-editor-container">
          <section className="blog-editor">
            <textarea spellCheck='true' value={this.state.blogContent} className='markdown-realtext' onChange={this.handleChange}>{blogContent}</textarea>
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
          initData={{
            tags: this.state.blogTags,
            cat: this.state.blogCategory,
            archiveTime: this.state.blogArchiveTime,
            illustration: this.state.blogIllustration,
            digest: this.state.blogDigest,
          }}
        />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          key={'top,right'}
          open={isOpenSnackbar}
          onClose={() => this.setState({ isOpenSnackbar: false })}
          message={snackbarMsg}
        />
      </BlogContainer>
    )
  }
}
