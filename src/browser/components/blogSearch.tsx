import * as React from 'react';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { BlogServer, DouMiBlog } from '../../common/blog-protocol';

import '../styles/search.less';

interface Props {}
interface State {
  list: DouMiBlog.ArticleBrief[],
  showList: boolean,
  keyword: string,
}

export default class BlogSearch extends React.Component<Props, State> {
  @Autorpc(BlogServer)
  protected readonly blogServer: BlogServer;

  flag = false;

  constructor(props: Props) {
    super(props)

    this.state = {
      keyword: '',
      list: [],
      showList: false
    }
  }


  handleSearch = async (e: any) => {
    const keyword = e.target.value
    if (keyword === '') {
      return
    }
    const result = await this.blogServer.findArticlesByKeyword(keyword)

    this.setState({
      keyword,
      list: result,
      showList: true
    })
  }

  handleJumpToDetail = () => {

  }

  render() {
    const { list, showList, keyword } = this.state;
    return (
      <React.Fragment>
        <div className='blog-search'>
          <div className='search-icon'>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: 'input-root',
              input: 'input',
            }}
            inputProps={{ 'aria-label': 'search' }}
            onCompositionStart={() => { this.flag = true }}
            onCompositionEnd={(e) => {
              this.flag = false
              this.handleSearch(e)
            }}
            onInput={(e) => {
              if (!this.flag) {
                this.handleSearch(e)
              }
            }}
          />
          <div className={showList ? "search-result show" : "search-result"}>
            {
              <div className="result-tip">{list.length === 0 ? '搜索不到' : ''}包含关键词<span>“{keyword}”</span>的文章{list.length ? '如下：' : ''}</div>
            }
            <ul>
            {
              list.map(item => (
                <li key={item.slug} className="article-item">”{item.title}“</li>
              ))
            }
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
