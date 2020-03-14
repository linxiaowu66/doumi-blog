// 暂时作废掉该页面了
import * as React from 'react';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles ***REMOVED*** from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';

interface Prop {***REMOVED***
interface State {
  type: EAggregationType,
  response: (DouMiBlog.CategoryItem | DouMiBlog.TagsItem | DouMiBlog.ArchiveItem)[],
  isOpenSnackbar: boolean,
  snackbarMsg: string,
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

  /* To remove - Can't perform a React state update on an unmounted component
    warning, use componentDidMount method under a condition and make false that condition on componentWillUnmount method. */
  _isMounted = false;

  constructor(props: Prop) {
    super(props);

    this.state = {
      type: 'category' as EAggregationType.category,
      response: [],
      isOpenSnackbar: false,
      snackbarMsg: '',
    ***REMOVED***
***REMOVED***
  static getDerivedStateFromProps(nextProps: Prop, prevState: State) {
    const newType = (nextProps as any).match.params.type as EAggregationType;
    if (prevState.type !== newType) {
      return { type: newType ***REMOVED***
  ***REMOVED***
    // eslint-disable-next-line no-null/no-null
    return null;
***REMOVED***
  componentDidUpdate(prevProps: Prop, prevState: State) {
    const type = (this.props as any).match.params.type as EAggregationType;
    const oldType = (prevProps as any).match.params.type as EAggregationType;
    if (type !== oldType) {
      this.fetchAggregationTypeList(type);
  ***REMOVED***
***REMOVED***

  componentDidMount() {
    this._isMounted = true;
    const type = (this.props as any).match.params.type as EAggregationType;
    this.fetchAggregationTypeList(type);
***REMOVED***
  async fetchAggregationTypeList(type: EAggregationType) {
  ***REMOVED***
      const method = this.typeMapToMethod[type];

      const response = await method();

      if (this._isMounted) {
        this.setState({
          response,
          type
        ***REMOVED***
    ***REMOVED***
  ***REMOVED*** catch (err) {
      console.error(err);
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '获取列表失败，请稍后重试',
      ***REMOVED***
  ***REMOVED***
***REMOVED***

  componentWillUnmount() {
    this._isMounted = false;
***REMOVED***

  render() {
    const { type, response, isOpenSnackbar, snackbarMsg ***REMOVED*** = this.state;
    const type2Query = {
      category: 'queryCat',
      tags: 'queryTag',
      archive: 'queryArch'
    ***REMOVED***
    return (
      <BlogContainer
        contentClass="blog-types-wrapper"
        isOpenSnackbar={isOpenSnackbar***REMOVED***
        snackbarMsg={snackbarMsg***REMOVED***
      >
        <section className="blog-type-list">
          {
            response.map((item, idx) => {
              const label = item.name || (item as DouMiBlog.ArchiveItem).archiveTime;
              const initial = label.substring(0, 1);
              return (<StyledBadge key={idx***REMOVED*** badgeContent={item.articlesCount***REMOVED*** color="secondary">
                <Chip avatar={<Avatar>{initial***REMOVED***</Avatar>***REMOVED*** color="primary" label={label***REMOVED*** onClick={() => {
                  location.hash = `#/blog/list?${type2Query[type]***REMOVED***=${item.id***REMOVED***`;
              ***REMOVED******REMOVED***/>
              </StyledBadge>);
          ***REMOVED***)
        ***REMOVED***
        </section>
      </BlogContainer>
    );
***REMOVED***
***REMOVED***
