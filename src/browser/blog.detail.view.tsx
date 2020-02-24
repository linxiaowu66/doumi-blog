import * as React from 'react';
import format from 'date-fns/format';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import Update from '@material-ui/icons/Update';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Category from '@material-ui/icons/Category';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';

const ReactMarkdown = require('react-markdown/with-html');

import 'gitalk/dist/gitalk.css';

const Gitalk = require('gitalk');

interface Prop {***REMOVED***
interface State {
  response?: DouMiBlog.ArticleDetail,
  open: boolean;
  isOpenSnackbar: boolean,
  snackbarMsg: string,
***REMOVED***

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
    ***REMOVED***
***REMOVED***

  async componentDidMount() {
  ***REMOVED***
      const slug = (this.props as any).match.params.slug;
      const response = await this.BlogServer.fetchArticleDetail(slug, true);

      this.setState({
        response,
        open: false,
      ***REMOVED***
  ***REMOVED*** catch(err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取博文详情失败，请稍后再试',
      ***REMOVED***
  ***REMOVED***
    const gitalk = new Gitalk({
      clientID: '16018f2091e0cd02d37c',
      clientSecret: 'c1c36729e8fdb3c309cd6e24939ad047cf904884',
      repo: 'doumi-blog-comments',
      owner: 'linxiaowu66',
      admin: ['linxiaowu66'],
      id: location.pathname.slice(0, 50),      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    ***REMOVED***

    gitalk.render('gitalk-container');
***REMOVED***

  handleJumpToList = (catId: number) => {
    location.hash = `#/blog/list?queryCat=${catId***REMOVED***`;
  ***REMOVED***
  render() {
    const { response, open, isOpenSnackbar, snackbarMsg ***REMOVED*** = this.state;
    return (
      <BlogContainer
        contentClass="blog-detail-wrapper"
        isOpenSnackbar={isOpenSnackbar***REMOVED***
        snackbarMsg={snackbarMsg***REMOVED***
      >
        {
          response ? (
            <React.Fragment>
              <h1>{response.title***REMOVED***</h1>
              <section className="blog-info">
                <div className="info-item">
                  <CalendarToday className="icon"/>
                  <span>发表于 {format(new Date((response as any).createdAt), 'yyyy-MM-dd')***REMOVED***</span>
                </div>
                <div className="info-item">
                  <Update className="icon"/>
                  <span>更新于 {format(new Date((response as any).updatedAt), 'yyyy-MM-dd')***REMOVED***</span>
                </div>
                <div className="info-item">
                  <Category className="icon"/>
                  <span>分类于 <span style={{ textDecoration: 'underline', cursor: 'pointer'***REMOVED******REMOVED*** onClick={() => this.handleJumpToList(response.catId)***REMOVED***>{response.category***REMOVED***</span></span>
                </div>
                <div className="info-item">
                  <FavoriteBorder className="icon"/>
                  <span>阅读量 {response.pv***REMOVED***</span>
                </div>
                <div className="info-item">
                  <DescriptionOutlined className="icon"/>
                  <span>字数统计 {response.content.length***REMOVED***</span>
                </div>
              </section>
              <ReactMarkdown
                source={response ? response.content : ''***REMOVED***
                renderers={{ code: CodeBlock ***REMOVED******REMOVED***
                escapeHtml={false***REMOVED***
                className="blog-detail"
              />
              <section className='micro-program'>
                <h4>小程序关注一波~</h4>
                <img src='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/xiaochengxu.jpeg' />
              </section>
              <section className='comments'>
                <h4>关于评论和留言</h4>
                <p>如果对本文 <a>{response?.title***REMOVED***</a> 的内容有疑问，请在下面的评论系统中留言，谢谢。</p>
              </section>
              <blockquote className='github'>
                <p>网站源码：<a href="https://github.com/linxiaowu66/doumi-blog">linxiaowu66 · 豆米的博客</a></p>
                <p>Follow：<a href="https://github.com/linxiaowu66">linxiaowu66 · Github</a></p>
              </blockquote>

            </React.Fragment>
          ): <Backdrop className='loading' open={open***REMOVED***>
            <CircularProgress color="inherit" />
          </Backdrop>
      ***REMOVED***
        <div id="gitalk-container" />
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
