import * as React from 'react';
import IconList from '@material-ui/icons/List';
import Home from '@material-ui/icons/Home';
import Category from '@material-ui/icons/Category';
import Archive from '@material-ui/icons/Archive';
import Bookmark from '@material-ui/icons/Bookmark';
import GitHub from '@material-ui/icons/GitHub';
import PersonPin from '@material-ui/icons/PersonPin';
import Web from '@material-ui/icons/Web';
import Cloud from '@material-ui/icons/Cloud';
import Create from '@material-ui/icons/Create';
import List from '@material-ui/icons/List';

export const navigatorListWithNotLogin = [{
  name: '首页',
  icon: <Home />,
  link: ''
***REMOVED***, {
  name: '博文列表',
  icon: <IconList />,
  link: '#/blog/list'
***REMOVED***, {
  name: '分类',
  icon: <Category />,
  link: '#/blog/aggregation/category'
***REMOVED***, {
  name: '归档',
  icon: <Archive />,
  link: '#/blog/aggregation/archive'
***REMOVED***, {
  name: '标签',
  icon: <Bookmark />,
  link: '#/blog/aggregation/tags'
***REMOVED***, {
  name: '关于豆米',
  icon: <PersonPin />,
  link: '#/about/doumi'
***REMOVED***, {
  name: '关于本站',
  icon: <Web />,
  link: '#/about/blog'
***REMOVED***, {
  name: '网站数据',
  icon: <Cloud />,
  link: '#/website/stats'
***REMOVED***, {
  name: 'Github',
  icon: <GitHub />,
  link: 'https://github.com/linxiaowu66/doumi-blog'
***REMOVED***];

export const navigatorListWithLogin = [{
  name: '首页',
  icon: <Home />,
  link: '#/blog/list'
***REMOVED***, {
  name: '新建博文',
  icon: <Create />,
  link: '#/blog/admin/editor'
***REMOVED***, {
  name: '博文列表',
  icon: <List />,
  link: '#/blog/admin/index'
***REMOVED***];
