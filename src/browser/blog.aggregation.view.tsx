import * as React from 'react';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { View } from "@malagu/react/lib/browser";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';
import { Category, Archive, Bookmark } from '@material-ui/icons'
import IconBreadcrumbs from './components/breadcrumbs';

interface Prop {}
interface State {
  type: string,
  response: (DouMiBlog.CategoryItem | DouMiBlog.TagsItem | DouMiBlog.ArchiveItem)[]
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

enum EAggregationType {
  category = 'category',
  tags = 'tags',
  archive = 'archive'
}

@View('/blog/list/:aggregationType')
export default class BlogAggregation extends React.Component<Prop, State> {
  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  typeMapToMethod = {
    category: this.BlogServer.fetchCatsList,
    tags: this.BlogServer.fetchTagsList,
    archive: this.BlogServer.fetchArchsList
  }

  constructor(props: Prop) {
    super(props);

    this.state = {
      type: 'category',
      response: []
    }
  }

  async componentWillMount() {
    try {
      const type = (this.props as any).match.params.aggregationType as EAggregationType

      const method = this.typeMapToMethod[type];

      const response = await method();

      this.setState({
        response,
        type
      })
    } catch (err) {

    }
  }

  render() {
    const { type, response } = this.state;
    const info = typeMeans[type]
    return (
      <BlogContainer>
        <IconBreadcrumbs position={info.means} icon={info.icon} />
        <section className="blog-type-list">
          {
            response.map((item, idx) => {
              const label = item.name || (item as DouMiBlog.ArchiveItem).archiveTime;
              const initial = label.substring(0, 1)
              return (<StyledBadge key={idx} badgeContent={item.articlesCount} color="secondary">
                <Chip avatar={<Avatar>{initial}</Avatar>} color="primary" label={label} />
              </StyledBadge>)
            })
          }
        </section>
      </BlogContainer>
    )
  }
}
