import * as React from 'react';
import { View } from "@malagu/react/lib/browser";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';
import { Category, Archive, Bookmark } from '@material-ui/icons'
import IconBreadcrumbs from './components/breadcrumbs';

// interface Prop
interface State {
    type: string
}

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 20,
      top: 2,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);

const typeMeans: { [key: string]: {means: string, icon: React.ReactElement}} = {
  category: {
    means: '分类',
    icon: <Category />
  },
  archive: {
    means: '归档',
    icon: <Archive />
  },
  tags: {
    means: '标签',
    icon: <Bookmark />
  }
}

@View('/blog/:type')
export default class BlogTypes extends React.Component<State, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: 'category'
    }
  }

  componentWillMount() {
    this.setState({
      type: (this.props as any).match.params.type
    })
  }

  render() {
    const { type } = this.state;
    const info = typeMeans[type]
    return (
      <BlogContainer>
        <IconBreadcrumbs position={info.means} icon={info.icon} />
        <section className="blog-type-list">
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
            <Chip avatar={<Avatar>N</Avatar>} color="primary" label="Node.js" />
          </StyledBadge>
        </section>
      </BlogContainer>
    )
  }
}
