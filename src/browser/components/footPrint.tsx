import * as React from 'react'
import { makeStyles ***REMOVED*** from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '90%',
    maxWidth: 760,
    margin: '0 auto',
    padding: '25px 0',
    textAlign: 'center',
    fontSize: 13,
    color: '#ccc'
***REMOVED***
***REMOVED***)

function FootPrint() {
  const classes = useStyles();
  return (
    <footer className={classes.footer***REMOVED***>
      <div>
        Copyright © <a href='/'>豆米博客</a>. 2020 • All rights reserved. | 浙ICP备15041819号-1
      </div>
    </footer>
  )
***REMOVED***

export default FootPrint;
