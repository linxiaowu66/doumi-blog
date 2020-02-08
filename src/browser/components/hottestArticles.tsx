import * as React from 'react'
import Container from '@material-ui/core/Container';
import Typography from './typography'
import { makeStyles } from '@material-ui/core/styles';
import { DouMiBlog } from '../../common/blog-protocol';

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

function HottestArticles(props: { list: DouMiBlog.ArticleBrief[] }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        热门文章
      </Typography>
      <ul>
        {
          props.list.map(item => (
            <li key={item.slug}>
              <a href={`#/blog/detail/${item.slug}`}><span>{item.title}</span><time>{item.archiveTime}</time></a>
            </li>
          ))
        }
      </ul>
    </Container>

  )
}

export default HottestArticles;
