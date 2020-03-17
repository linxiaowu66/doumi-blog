import * as React from 'react';
import { makeStyles ***REMOVED*** from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '20px auto',
    '& .title': {
      lineHeight: '40px',
      borderBottom: '1px solid #eee',
      color: 'rgb(17, 157, 85)',
      fontWeight: 'bold',
      position: 'relative' as 'relative',
      marginBottom: 10,
      fontSize: 20.8,
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      '&:after': {
        position: 'absolute',
        width: 90,
        height: 2,
        content: '""',
        background: 'rgb(245, 0, 87)',
        left: 0,
        bottom: 0,
        transition: 'all 0.5s ease',
    ***REMOVED***,
      '&:hover:after': {
        width: 120,
    ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***

function DouMiDetailItem(props: {title: string, children: React.ReactElement[]***REMOVED***) {
  const classes = useStyles();
  return (
    <div className={classes.root***REMOVED***>
      <div className="title">{props.title***REMOVED***</div>
      {
        props.children
    ***REMOVED***
    </div>
  );
***REMOVED***

export default DouMiDetailItem;
