import * as React from 'react'
import { Container***REMOVED*** from '@material-ui/core';
import Typography from './Typography'
import { makeStyles ***REMOVED*** from '@material-ui/core/styles';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

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
      ***REMOVED***,
        '&:nth-child(1):before': {
          content: '"1"',
      ***REMOVED***,
        '&:nth-child(2):before': {
          content: '"2"',
      ***REMOVED***,
        '&:nth-child(3):before': {
          content: '"3"',
      ***REMOVED***,
        '&:nth-child(4):before': {
          content: '"4"',
      ***REMOVED***,
        '&:nth-child(5):before': {
          content: '"5"',
      ***REMOVED***,
        '& a': {
          color: '#39c',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
            color: '#119d55',
        ***REMOVED***,
          '& span': {
              lineHeight: 'inherit',
              fontWeight: 'normal',
        ***REMOVED***,
          '& time': {
            color: '#bbbbbb',
            fontSize: 12,
            fontWeight: 'normal',
            marginLeft: 10,
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***)

function HottestArticles(props: { list: DouMiBlog.ArticleBrief[] ***REMOVED***) {
  const classes = useStyles();
  return (
    <Container className={classes.root***REMOVED*** component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        热门文章
      </Typography>
      <ul>
        {
          props.list.map(item => (
            <li key={item.slug***REMOVED***>
              <a href='#/blog/{{post.slug***REMOVED******REMOVED***'><span>{item.title***REMOVED***</span><time>{item.archiveTime***REMOVED***</time></a>
            </li>
          ))
      ***REMOVED***
      </ul>
    </Container>

  )
***REMOVED***

export default HottestArticles;
