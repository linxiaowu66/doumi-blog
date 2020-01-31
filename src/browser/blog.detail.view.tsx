import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { View } from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';

interface Prop {}
interface State {
    response: DouMiBlog.ArticleDetail
}



@View('/blog/detail/:slug')
export default class BlogDetail extends React.Component<Prop, State> {
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);
  }

  async componentWillMount() {
    try {
      const slug = (this.props as any).match.params.slug;
      const response = await this.BlogServer.fetchArticleDetail(slug);

      this.setState({
        response
      })
    } catch(err) {

    }
  }
  render() {
    const response = this.state?.response;
    return (
      <BlogContainer>
        <ReactMarkdown
          source={response ? response.content : ''}
          renderers={{ code: CodeBlock }}
          className="blog-detail"
        />
      </BlogContainer>
    )
  }
}
