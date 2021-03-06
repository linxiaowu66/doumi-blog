import * as React from 'react';
import format from 'date-fns/format';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import Update from '@material-ui/icons/Update';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Category from '@material-ui/icons/Category';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { View } from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';
import ABlock from './components/aBlock';
import Catalog from 'progress-catalog';

import 'progress-catalog/src/progress-catalog.css';

const ReactMarkdown = require('react-markdown/with-html');

import 'gitalk/dist/gitalk.css';

const Gitalk = require('gitalk');

interface Prop {}
interface State {
  response?: DouMiBlog.ArticleDetail,
  open: boolean;
  isOpenSnackbar: boolean,
  snackbarMsg: string,
  slug: string
}

@View('/blog/detail/:slug')
export default class BlogDetail extends React.Component<Prop, State> {
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);

    this.state = {
      open: true,
      isOpenSnackbar: false,
      snackbarMsg: '',
      slug: ''
    };
  }

  async componentDidMount() {

    const slug = (this.props as any).match.params.slug;

    await this.fetchArticleDetail(slug);

    setTimeout(() => {
      new Catalog({
        contentEl: 'blog-detail',
        catalogEl: 'catalog-content-wrapper',
        selector: ['h2', 'h3', 'h4', 'h5'],
        topMargin: 70,
      });
    }, 1000);
  }
  async fetchArticleDetail (slug: string) {
    try {
      const response = await this.BlogServer.fetchArticleDetail(slug, true);

      this.setState({
        response,
        open: false,
        slug,
      });

      const gitalk = new Gitalk({
        clientID: '16018f2091e0cd02d37c',
        clientSecret: 'c1c36729e8fdb3c309cd6e24939ad047cf904884',
        repo: 'doumi-blog-comments',
        owner: 'linxiaowu66',
        admin: ['linxiaowu66'],
        title: response.title,
        body: `${location.href} \n\n ${response.digest}`,
        labels: [response.category],
        id: location.hash.split('/')[3].slice(0, 50),      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
      });

      gitalk.render('gitalk-container');
    } catch(err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博文详情失败，请稍后再试',
        open: false,
      });
    }
  }
  static getDerivedStateFromProps(nextProps: Prop, prevState: State) {
    const newSlug = (nextProps as any).match.params.slug;
    if (prevState.response?.slug !== newSlug) {
      return { slug: newSlug };
    }
    // eslint-disable-next-line no-null/no-null
    return null;
  }
  componentDidUpdate(prevProps: Prop, prevState: State) {
    const slug = (this.props as any).match.params.slug;
    const oldSlug = (prevProps as any).match.params.slug;
    if (slug !== oldSlug) {
      this.fetchArticleDetail(slug);
    }
  }

  handleJumpToList = (catId: number) => {
    location.hash = `#/blog/list?queryCat=${catId}`;
  };
  render() {
    const { response, open, isOpenSnackbar, snackbarMsg } = this.state;
    return (
      <BlogContainer
        contentClass="blog-detail-wrapper"
        isOpenSnackbar={isOpenSnackbar}
        snackbarMsg={snackbarMsg}
      >
        {
          response ? (
            <React.Fragment>
              <h1>{response.title}</h1>
              <section className="blog-info">
                <div className="info-item">
                  <CalendarToday className="icon"/>
                  <span>发表于 {format(new Date((response as any).createdAt), 'yyyy-MM-dd')}</span>
                </div>
                <div className="info-item">
                  <Update className="icon"/>
                  <span>更新于 {format(new Date((response as any).updatedAt), 'yyyy-MM-dd')}</span>
                </div>
                <div className="info-item">
                  <Category className="icon"/>
                  <span>分类于 <span style={{ textDecoration: 'underline', cursor: 'pointer'}} onClick={() => this.handleJumpToList(response.catId)}>{response.category}</span></span>
                </div>
                <div className="info-item">
                  <FavoriteBorder className="icon"/>
                  <span>阅读量 {response.pv}</span>
                </div>
                <div className="info-item">
                  <DescriptionOutlined className="icon"/>
                  <span>字数统计 {response.content.length}</span>
                </div>
              </section>
              <section id="blog-detail">
                <ReactMarkdown
                  source={response ? response.content : ''}
                  renderers={{ code: CodeBlock, link: ABlock }}
                  escapeHtml={false}
                  className="blog-detail"
                />
              </section>
              <section className='micro-program'>
                <h4>小程序关注一波~</h4>
                <img src='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/xiaochengxu.jpeg' />
              </section>
              <section className='comments'>
                <h4>关于评论和留言</h4>
                <p>如果对本文 <a>{response?.title}</a> 的内容有疑问，请在下面的评论系统中留言，谢谢。</p>
              </section>
              <blockquote className='github'>
                <p>网站源码：<a href="https://github.com/linxiaowu66/doumi-blog" target="__blank">linxiaowu66 · 豆米的博客</a></p>
                <p>Follow：<a href="https://github.com/linxiaowu66" target="__blank">linxiaowu66 · Github</a></p>
              </blockquote>

            </React.Fragment>
          ): <Backdrop className='loading' open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
        <div id="gitalk-container" />
        <div id="catalog-content-wrapper" />
      </BlogContainer>
    );
  }
}
