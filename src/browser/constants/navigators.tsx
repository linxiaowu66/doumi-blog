import * as React from 'react';
import GitHub from '@material-ui/icons/GitHub';
import ExitToApp from '@material-ui/icons/ExitToApp';

export const navigatorListWithNotLogin = [{
  name: '首页',
  subName: 'Home',
  link: ''
}, {
  name: '博客',
  subName: 'Blogs',
  link: '#/blog/list'
}, {
  name: '数据',
  subName: 'Statistics',
  link: '#/website/stats'
}, {
  name: '豆米',
  subName: 'DouMi',
  link: '#/about/doumi'
}, {
  name: '本站',
  subName: 'Website',
  link: '#/about/blog'
}, {
  name: '登录',
  subName: 'Login',
  link: '#/blog/auth/login'
}, {
  name: 'Github',
  subName: 'Github',
  icon: <GitHub />,
  link: 'https://github.com/linxiaowu66/doumi-blog'
}];

export const navigatorListWithLogin = [{
  name: '主页',
  subName: 'Home',
  link: '#/blog/list'
}, {
  name: '新建',
  subName: 'New',
  link: '#/blog/admin/editor'
}, {
  name: '博客',
  subName: 'Blog',
  link: '#/blog/admin/index'
}, {
  name: '退出',
  subName: 'Exit',
  icon: <ExitToApp />,
  link: 'javascript:void(0)'
}];
