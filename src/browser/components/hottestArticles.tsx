import * as React from 'react'
import { Container} from '@material-ui/core';
import Typography from './Typography'
import { makeStyles } from '@material-ui/core/styles';

const hotterArticles =  [
      {
          "title": "由form表单来说说前后台数据之间的交互",
          "archiveTime": "2016-09-24 19:57",
          "slug": "You-formBiao-Dan-Lai-Shuo-Shuo-Qian-Hou-Tai-Shu-Ju-Zhi-Jian-De-Jiao-Hu-88"
      },
      {
          "title": "如何让你的github项目更加高大上",
          "archiveTime": "2016-10-13 22:36",
          "slug": "Ru-He-Rang-Ni-De-githubXiang-Mu-Geng-Jia-Gao-Da-Shang-20"
      },
      {
          "title": "阿里云Ubuntu搭建NodeJs环境",
          "archiveTime": "2016-08-10 16:15",
          "slug": "A-Li-Yun-UbuntuDa-Jian-NodeJsHuan-Jing-75"
      },
      {
          "title": "babel-preset-env升级迁移完全指北",
          "archiveTime": "2017-11-13 21:09",
          "slug": "babel-preset-envSheng-Ji-Qian-Yi-Wan-Quan-Zhi-Bei-70"
      },
      {
          "title": "Nodejs下微信网页开发教程(一)",
          "archiveTime": "2017-01-10 19:57",
          "slug": "NodejsXia-Wei-Xin-Wang-Ye-Kai-Fa-Jiao-Cheng-Yi-27"
      }
  ]

const useStyles = makeStyles({
  root: {
    '& ul': {
      padding: 0,
      margin: '65px 0px',
      '& li': {
        width: '100%',
        display: 'block',
        borderBottom: '1px solid #ddd',
        borderTop: '1px solid #fff',
        padding: '15px',
        '&:before': {
          display: 'inline-block',
          width: 15,
          height: 15,
          margin:'0 5px',
          fontSize: 12,
          border: '2px solid #ccc',
          textAlign: 'center',
          color: '#119d55',
          boxSizing: 'content-box',
        },
        '&:nth-child(1):before': {
          content: '"1"',
        },
        '&:nth-child(2):before': {
          content: '"2"',
        },
        '&:nth-child(3):before': {
          content: '"3"',
        },
        '&:nth-child(4):before': {
          content: '"4"',
        },
        '&:nth-child(5):before': {
          content: '"5"',
        },
        '& a': {
          color: '#39c',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
            color: '#119d55',
          },
          '& span': {
              lineHeight: 'inherit',
              fontWeight: 'normal',
          },
          '& time': {
            color: '#bbbbbb',
            fontSize: 12,
            fontWeight: 'normal',
            marginLeft: 10,
          }
        }
      }
    }
  }
})

function HottestArticles() {
  const classes = useStyles();
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        热门文章
      </Typography>
      <ul>
        {
          hotterArticles.map(item => (
            <li key={item.slug}>
              <a href='/blog/{{post.slug}}'><span>{item.title}</span><time>{item.archiveTime}</time></a>
            </li>
          ))
        }
      </ul>
    </Container>

  )
}

export default HottestArticles;
