import * as React from 'react';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { View ***REMOVED*** from "@malagu/react/lib/browser";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles ***REMOVED*** from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';
import Category from '@material-ui/icons/Category';
import Archive from '@material-ui/icons/Archive';
import Bookmark from '@material-ui/icons/Bookmark';
import IconBreadcrumbs from './components/breadcrumbs';

interface Prop {***REMOVED***
interface State {
  type: EAggregationType,
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

@View('/blog/aggregation/:type')
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
      type: 'category' as EAggregationType.category,
      response: []
  ***REMOVED***
***REMOVED***
  // static getDerivedStateFromProps() {

  // ***REMOVED***
  componentWillReceiveProps(newProps: Prop) {
    const { type ***REMOVED*** = this.state;
    const newType = (newProps as any).match.params.type as EAggregationType
    if (type !== newType) {
      this.fetchAggregationTypeList(newType)
  ***REMOVED***
***REMOVED***

  componentWillMount() {
    const { type ***REMOVED*** = this.state;
    this.fetchAggregationTypeList(type)
***REMOVED***
  async fetchAggregationTypeList(type: EAggregationType) {
  ***REMOVED***
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
    const type2Query = {
      category: 'queryCat',
      tags: 'queryTag',
      archive: 'queryArch'
  ***REMOVED***
    return (
      <BlogContainer>
        <IconBreadcrumbs position={info.means***REMOVED*** icon={info.icon***REMOVED*** />
        <section className="blog-type-list">
          {
            response.map((item, idx) => {
              const label = item.name || (item as DouMiBlog.ArchiveItem).archiveTime;
              const initial = label.substring(0, 1)
              return (<StyledBadge key={idx***REMOVED*** badgeContent={item.articlesCount***REMOVED*** color="secondary">
                <Chip avatar={<Avatar>{initial***REMOVED***</Avatar>***REMOVED*** color="primary" label={label***REMOVED*** onClick={() => {
                  location.hash = `#/blog/list?${type2Query[type]***REMOVED***=${item.id***REMOVED***`
              ***REMOVED******REMOVED***/>
              </StyledBadge>)
          ***REMOVED***)
        ***REMOVED***
        </section>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
