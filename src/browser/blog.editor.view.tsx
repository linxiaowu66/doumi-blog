import * as React from 'react';
import * as query from 'query-string';
import { Value } from '@malagu/core/lib/common/annotation/detached';
import { ENDPOINT } from '@malagu/web';
import axios from 'axios';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer } from '../common/blog-protocol';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BlogContainer from './components/blogContainer';
import Settings from '@material-ui/icons/Settings';
import { View } from '@malagu/react/lib/browser';
import CodeBlock from './components/codeBlock';
import BlogConfig from './components/blogSetting';
const ReactMarkdown = require('react-markdown/with-html');

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
  anchorEl: undefined | Element,
  showSetting: boolean,
  tags: string[], // 后端存储的当前所有标签
  categories: string[] // 后端存储的当前所有分类
}

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
  anchorEl: undefined,
  showSetting: false,
};
@View('/blog/admin/editor')
export default class BlogAdminEditor extends React.Component<Prop, State> {
  @Value(ENDPOINT)
  protected readonly endpoint: string;

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = { ...initData, tags: [], categories: []};
  }
  async componentDidMount() {
    try {
      const { slug } = query.parse((this.props as any).location.search);

      const [tagsList, catList] = await Promise.all([
        this.BlogServer.fetchTagsList(),
        this.BlogServer.fetchCatsList()
      ]);

      this.setState({
        tags: tagsList.map(item => item.name),
        categories: catList.map(item => item.name),
      });

      if (slug) {
        this.setState({
          editMode: true,
          slug: slug as string
        });
        await this.fetchBlogDetail(slug as string);
      }
    } catch (err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博客信息失败，请稍后再试',
      });
    }
  }
  static getDerivedStateFromProps(nextProps: Prop, prevState: State) {
    const { slug } = query.parse((nextProps as any).location.search);
    if (prevState.slug && !slug) {
      return initData;
    }
    // eslint-disable-next-line no-null/no-null
    return null;
  }
  componentDidUpdate(prevProps: Prop, prevState: State) {
    // const { slug } = this.state;
    const { slug } = query.parse((this.props as any).location.search);
    const { slug: oldSlug } = query.parse((prevProps as any).location.search);
    if (slug !== oldSlug) {
      this.fetchBlogDetail(slug as string);
    }
  }
  fetchBlogDetail = async (slug: string) => {
    try {
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
      });
    } catch (err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博客详情失败，请稍后再试',
      });
    }
  };
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
    };

    const result = editMode ?
      await axios.put(`${this.endpoint ? this.endpoint : ''}/api/blog`, { ...postBody, slug: this.state.slug }, {withCredentials: true}) :
      await axios.post(`${this.endpoint ? this.endpoint : ''}/api/blog`, postBody, {withCredentials: true});

    if (result.data.status && result.data.data) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: result.data.data.msg
      }, () => {
        setTimeout(() => location.hash = '#/blog/admin/index', 3000);
      });
    } else {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '保存博文失败，请稍后再试',
      });
    }
  };
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      blogContent: event.target.value
    });
  };
  handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleCloseMenu = () => {
    this.setState({
      anchorEl: undefined
    });
  };
  handleSaveConfig = (data: ConfigProps) => {
    this.setState({
      blogArchiveTime: data.archiveTime,
      showSetting: false,
      blogIllustration: data.illustration,
      blogCategory: data.category,
      blogTags: data.tags,
      blogDigest: data.digest
    });
  };
  render() {
    const { blogContent, anchorEl, showSetting, tags, categories, isOpenSnackbar, snackbarMsg } = this.state;
    return(
      <BlogContainer
        endpoint={this.endpoint}
        isLogin
        contentClass="blog-editor-wrapper"
        isOpenSnackbar={isOpenSnackbar}
        snackbarMsg={snackbarMsg}
        closeSnackBar={() => this.setState({ isOpenSnackbar: false })}
      >
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
              escapeHtml={false}
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
      </BlogContainer>
    );
  }
}
