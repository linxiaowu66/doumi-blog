import * as React from 'react';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { BlogServer, DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

import '../styles/search.less';

interface Props {***REMOVED***
interface State {
  list: DouMiBlog.ArticleBrief[],
  showList: boolean,
  keyword: string,
***REMOVED***

export default class BlogSearch extends React.Component<Props, State> {
  @Autorpc(BlogServer)
  protected readonly blogServer: BlogServer;

  flag = false;

  constructor(props: Props) {
    super(props);

    this.state = {
      keyword: '',
      list: [],
      showList: false
    ***REMOVED***
***REMOVED***


  handleSearch = async (e: any) => {
    const keyword = e.target.value;
    if (keyword === '') {
  ***REMOVED***
  ***REMOVED***
    const result = await this.blogServer.findArticlesByKeyword(keyword);

    this.setState({
      keyword,
      list: result,
      showList: true
    ***REMOVED***
  ***REMOVED***

  handleJumpToDetail = (slug: string) => {
    location.hash = `/blog/detail/${slug***REMOVED***`;
  ***REMOVED***

  render() {
    const { list, showList, keyword ***REMOVED*** = this.state;
    return (
      <ClickAwayListener onClickAway={() => this.setState({ showList: false ***REMOVED***)***REMOVED***>
        <div className='blog-search'>
          <div className='search-icon'>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: 'input-root',
              input: 'input',
          ***REMOVED******REMOVED***
            onFocus={() => {
              if (this.state.keyword) {
                this.setState({ showList: true ***REMOVED***
            ***REMOVED***
          ***REMOVED******REMOVED***
            inputProps={{ 'aria-label': 'search' ***REMOVED******REMOVED***
            onCompositionStart={() => { this.flag = true; ***REMOVED******REMOVED***
            onCompositionEnd={e => {
              this.flag = false;
              this.handleSearch(e);
          ***REMOVED******REMOVED***
            onInput={e => {
              if (!this.flag) {
                this.handleSearch(e);
            ***REMOVED***
          ***REMOVED******REMOVED***
          />
          <div className={showList ? 'search-result show' : 'search-result'***REMOVED***>
            {
              <div className="result-tip">{list.length === 0 ? '搜索不到' : ''***REMOVED***包含关键词<span>“{keyword***REMOVED***”</span>的文章{list.length ? '如下：' : ''***REMOVED***</div>
          ***REMOVED***
            <ul>
              {
                list.map(item => (
                  <li key={item.slug***REMOVED*** className="article-item" onClick={() => this.handleJumpToDetail(item.slug)***REMOVED***>”{item.title***REMOVED***“</li>
                ))
            ***REMOVED***
            </ul>
          </div>
        </div>
      </ClickAwayListener>
    );
***REMOVED***
***REMOVED***
