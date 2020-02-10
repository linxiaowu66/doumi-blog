import * as React from 'react';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { BlogServer, DouMiBlog } from '../common/blog-protocol';
import { View } from "@malagu/react/lib/browser";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import BlogContainer from './components/blogContainer';
import Category from '@material-ui/icons/Category';
import Archive from '@material-ui/icons/Archive';
import Bookmark from '@material-ui/icons/Bookmark';
import IconBreadcrumbs from './components/breadcrumbs';

interface Prop {}
interface State {
  type: EAggregationType,
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

@View('/blog/aggregation/:type')
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
      type: 'category' as EAggregationType.category,
      response: []
    }
  }
  // static getDerivedStateFromProps() {

  // }
  componentWillReceiveProps(newProps: Prop) {
    const { type } = this.state;
    const newType = (newProps as any).match.params.type as EAggregationType
    if (type !== newType) {
      this.fetchAggregationTypeList(newType)
    }
  }

  componentWillMount() {
    const type = (this.props as any).match.params.type as EAggregationType;
    this.fetchAggregationTypeList(type)
  }
  async fetchAggregationTypeList(type: EAggregationType) {
    try {
      console.log(type)
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
    const type2Query = {
      category: 'queryCat',
      tags: 'queryTag',
      archive: 'queryArch'
    }
    return (
      <BlogContainer>
        <IconBreadcrumbs position={info.means} icon={info.icon} />
        <section className="blog-type-list">
          {
            response.map((item, idx) => {
              const label = item.name || (item as DouMiBlog.ArchiveItem).archiveTime;
              const initial = label.substring(0, 1)
              return (<StyledBadge key={idx} badgeContent={item.articlesCount} color="secondary">
                <Chip avatar={<Avatar>{initial}</Avatar>} color="primary" label={label} onClick={() => {
                  location.hash = `#/blog/list?${type2Query[type]}=${item.id}`
                }}/>
              </StyledBadge>)
            })
          }
        </section>
      </BlogContainer>
    )
  }
}
