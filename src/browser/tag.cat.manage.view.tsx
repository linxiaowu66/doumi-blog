import * as React from 'react';
import { View ***REMOVED*** from "@malagu/react/lib/browser";
// import BlogTable from './components/blog.table';
import BlogContainer from './components/blogContainer';
import { Create, List, Label ***REMOVED*** from '@material-ui/icons'

interface Prop {***REMOVED***
interface State {
***REMOVED***

const navigatorList = [{
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/editor'
***REMOVED***, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin/index'
***REMOVED***, {
  name: '标签和分类管理',
  icon: <Label />,
  link: '#/blog/admin/management'
***REMOVED***]

@View('/blog/admin/management')
export default class TagCatManagement extends React.Component<Prop, State> {
  render() {
    return (
    <BlogContainer navigatorList={navigatorList***REMOVED*** isLogin >
      {/* <BlogTable
        title="标签"
        data={[{
          id: 1,
          name: 'nodejs',
          count: 10
      ***REMOVED***]***REMOVED***
      />
      <BlogTable
        title="分类"
        data={[{
          id: 1,
          name: '技术',
          count: 10
      ***REMOVED***]***REMOVED***
      /> */***REMOVED***
    </BlogContainer>)
***REMOVED***
***REMOVED***
