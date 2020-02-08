import * as React from 'react';
import { View } from "@malagu/react/lib/browser";
// import BlogTable from './components/blog.table';
import BlogContainer from './components/blogContainer';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';
import Label from '@material-ui/icons/Label';

interface Prop {}
interface State {
}

const navigatorList = [{
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/editor'
}, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin/index'
}, {
  name: '标签和分类管理',
  icon: <Label />,
  link: '#/blog/admin/management'
}]

@View('/blog/admin/management')
export default class TagCatManagement extends React.Component<Prop, State> {
  render() {
    return (
    <BlogContainer navigatorList={navigatorList} isLogin >
      {/* <BlogTable
        title="标签"
        data={[{
          id: 1,
          name: 'nodejs',
          count: 10
        }]}
      />
      <BlogTable
        title="分类"
        data={[{
          id: 1,
          name: '技术',
          count: 10
        }]}
      /> */}
    </BlogContainer>)
  }
}
