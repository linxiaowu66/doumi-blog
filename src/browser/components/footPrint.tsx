import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '90%',
    maxWidth: 760,
    margin: '0 auto',
    padding: '25px 0',
    textAlign: 'center',
    fontSize: 13,
    color: '#ccc'
  }
});

function FootPrint() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        Copyright © <a href='/'>豆米博客</a>. 2020 • All rights reserved. | <a href='https://beian.miit.gov.cn'>浙ICP备15041819号-1</a>
      </div>
    </footer>
  );
}

export default FootPrint;
