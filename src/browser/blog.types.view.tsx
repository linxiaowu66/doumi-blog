import * as React from 'react';
import { View ***REMOVED*** from "@malagu/react/lib/browser";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles ***REMOVED*** from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';
import { Category, Archive, Bookmark ***REMOVED*** from '@material-ui/icons'
import IconBreadcrumbs from './components/breadcrumbs';

// interface Prop
interface State {
    type: string
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

@View('/blog/list/:type')
export default class BlogTypes extends React.Component<State, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: 'category'
  ***REMOVED***
***REMOVED***

  componentWillMount() {
    this.setState({
      type: (this.props as any).match.params.type
  ***REMOVED***)
***REMOVED***

  render() {
    const { type ***REMOVED*** = this.state;
    const info = typeMeans[type]
    return (
      <BlogContainer>
        <IconBreadcrumbs position={info.means***REMOVED*** icon={info.icon***REMOVED*** />
        <section className="blog-type-list">
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4***REMOVED*** color="secondary">
            <Chip avatar={<Avatar>N</Avatar>***REMOVED*** color="primary" label="Node.js" />
          </StyledBadge>
        </section>
      </BlogContainer>
    )
***REMOVED***
***REMOVED***
