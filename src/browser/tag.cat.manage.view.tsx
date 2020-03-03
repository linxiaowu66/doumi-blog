import * as React from 'react';
import { View } from '@malagu/react/lib/browser';
// import BlogTable from './components/blog.table';
import BlogContainer from './components/blogContainer';

interface Prop {}
interface State {
}


@View('/blog/admin/management')
export default class TagCatManagement extends React.Component<Prop, State> {
  render() {
    return (
      <BlogContainer isLogin isOpenSnackbar={false}>
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
      </BlogContainer>);
  }
}
