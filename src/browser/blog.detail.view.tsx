import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import BlogContainer from './components/blogContainer';
import CodeBlock from './components/codeBlock';

interface Prop {***REMOVED***
interface State {
    response: DouMiBlog.ArticleDetail
***REMOVED***



@View('/blog/detail/:slug')
export default class BlogDetail extends React.Component<Prop, State> {
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Prop) {
    super(props);
***REMOVED***

  async componentWillMount() {
  ***REMOVED***
      const slug = (this.props as any).match.params.slug;
      const response = await this.BlogServer.fetchArticleDetail(slug);

      this.setState({
        response
    ***REMOVED***)
  ***REMOVED*** catch(err) {

  ***REMOVED***
***REMOVED***
  render() {
    const response = this.state?.response;
    return (
      <BlogContainer>
        <ReactMarkdown
          source={response ? response.content : ''***REMOVED***
          renderers={{ code: CodeBlock ***REMOVED******REMOVED***
          className="blog-detail"
        />
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
