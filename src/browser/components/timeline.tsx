import * as React from 'react';
import { makeStyles ***REMOVED*** from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontSize: 12,
    fontWeight: 'lighter',
    display: 'block',
    position: 'relative',
    margin: '15px 0',
    border: '2px transparent solid',
    background: '#FCFCFC',
    padding: '3px 30px',
    paddingBottom: 20,
    borderRadius: 10,
    transition: '.3s ease',
    '&:hover': {
      boxShadow: '0 5px 35px rgba(100, 100, 100, 0.15)',
      transform: 'translateY(-3px)',
      borderColor: 'pink',
      background: '#FEFEFE',
  ***REMOVED***,
    '& > *': {
      paddingLeft: 15,
      display: 'block'
  ***REMOVED***,
    '& h3': {
      fontSize: 18,
      fontWeight: 'bolder',
      paddingLeft: 0,
      color: '#119d55',
      '&::before': {
        content: '"·"',
        fontSize: 18,
        fontWeight: 'bolder',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'inline-block',
        width: 17,
        height: 17,
        border: '2px #119d55 solid',
        borderRadius: '100%',
        marginRight: 5,
        marginLeft: -7,
    ***REMOVED***,
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: 2,
        height: 'calc(100% - 2.5em)',
        marginTop: -7,
        background: 'rgba(255, 79, 127, 0.6)',
    ***REMOVED***
  ***REMOVED***,
    '& p': {
      margin: '1em 0 3px 0',
      fontWeight: 'bolder',
      fontSize: 14,
      '&:before': {
        content: '"·"',
        position: 'absolute',
        color: '#119d55',
        fontSize: 58,
        fontWeight: 'bolder',
        lineHeight: '10px',
        marginLeft: '-23px',
    ***REMOVED***
  ***REMOVED***,
    '& i': {
      margin: '3px 0 6px 0',
      fontStyle: 'unset',
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.5)',
  ***REMOVED***,
    '& span': {
      fontWeight: 'lighter',
      fontSize: 14,
      // fontFamily: '"Hiragino Sans GB", "Hiragino Sans GB W3", "Century Gothic", Arial, Verdana, Tahoma,"\5FAE\8F6F\96C5\9ED1"',
  ***REMOVED***
***REMOVED***
***REMOVED***

interface TimeItemProps {
  subTitle: string,
  time: string,
  desc: string
***REMOVED***

function Timeline(props: { title: string, timeList: TimeItemProps[] ***REMOVED***) {
  const classes = useStyles();
  const { title, timeList ***REMOVED*** = props;
  return (
    <div className={classes.root***REMOVED***>
      <h3>{title***REMOVED***</h3>
      {
        timeList.map((item, index) => (
          <React.Fragment key={index***REMOVED***>
            <p>{item.subTitle***REMOVED***</p>
            <i>{item.time***REMOVED***</i>
            <span>{item.desc***REMOVED***</span>
          </React.Fragment>
        ))
    ***REMOVED***
    </div>
  );
***REMOVED***

export default Timeline;
