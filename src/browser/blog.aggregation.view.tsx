import * as React from 'react';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { View ***REMOVED*** from "@malagu/react/lib/browser";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles ***REMOVED*** from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';
import { Category, Archive, Bookmark ***REMOVED*** from '@material-ui/icons'
import IconBreadcrumbs from './components/breadcrumbs';

interface Prop {***REMOVED***
interface State {
  type: string,
  response: (DouMiBlog.CategoryItem | DouMiBlog.TagsItem | DouMiBlog.ArchiveItem)[]
***REMOVED***

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 20,
      top: 2,
      border: `2px solid ${theme.palette.background.paper***REMOVED***`,
      padding: '0 4px',
  ***REMOVED***,
***REMOVED***),
)(Badge);

const typeMeans: { [key: string]: {means: string, icon: React.ReactElement***REMOVED******REMOVED*** = {
  category: {
    means: '分类',
    icon: <Category />
***REMOVED***,
  archive: {
    means: '归档',
    icon: <Archive />
***REMOVED***,
  tags: {
    means: '标签',
    icon: <Bookmark />
***REMOVED***
***REMOVED***

enum EAggregationType {
  category = 'category',
  tags = 'tags',
  archive = 'archive'
***REMOVED***

@View('/blog/list/:aggregationType')
export default class BlogAggregation extends React.Component<Prop, State> {
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  typeMapToMethod = {
    category: this.BlogServer.fetchCatsList,
    tags: this.BlogServer.fetchTagsList,
    archive: this.BlogServer.fetchArchsList
***REMOVED***

  constructor(props: Prop) {
    super(props);

    this.state = {
      type: 'category',
      response: []
  ***REMOVED***
***REMOVED***

  async componentWillMount() {
  ***REMOVED***
      const type = (this.props as any).match.params.aggregationType as EAggregationType

      const method = this.typeMapToMethod[type];

      const response = await method();

      this.setState({
        response,
        type
    ***REMOVED***)
  ***REMOVED*** catch (err) {

  ***REMOVED***
***REMOVED***

  render() {
    const { type, response ***REMOVED*** = this.state;
    const info = typeMeans[type]
    return (
      <BlogContainer>
        <IconBreadcrumbs position={info.means***REMOVED*** icon={info.icon***REMOVED*** />
        <section className="blog-type-list">
          {
            response.map((item, idx) => {
              const label = item.name || (item as DouMiBlog.ArchiveItem).archiveTime;
              const initial = label.substring(0, 1)
              return (<StyledBadge key={idx***REMOVED*** badgeContent={item.articlesCount***REMOVED*** color="secondary">
                <Chip avatar={<Avatar>{initial***REMOVED***</Avatar>***REMOVED*** color="primary" label={label***REMOVED*** />
              </StyledBadge>)
          ***REMOVED***)
        ***REMOVED***
        </section>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
