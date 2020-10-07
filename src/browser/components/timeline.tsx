import * as React from 'react';
import { makeStyles } from '@material-ui/core';

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
    },
    '& > *': {
      paddingLeft: 15,
      display: 'block'
    },
    '& h3': {
      fontSize: 18,
      fontWeight: 'bolder',
      paddingLeft: 0,
      color: '#119d55',
      '&::before': {
        content: '"·"',
        fontSize: 18,
        fontWeight: 'bolder',
        lineHeight: '17px',
        textAlign: 'center',
        display: 'inline-block',
        width: 17,
        height: 17,
        border: '2px #119d55 solid',
        borderRadius: '100%',
        marginRight: 5,
        marginLeft: -7,
      },
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: 2,
        height: 'calc(100% - 2.5em)',
        marginTop: -12,
        left: '31.5px',
        background: 'rgba(255, 79, 127, 0.6)',
      }
    },
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
        marginLeft: '-27px',
      }
    },
    '& i': {
      margin: '3px 0 6px 0',
      fontStyle: 'unset',
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.5)',
    },
    '& span': {
      fontWeight: 'lighter',
      fontSize: 14,
      // fontFamily: '"Hiragino Sans GB", "Hiragino Sans GB W3", "Century Gothic", Arial, Verdana, Tahoma,"\5FAE\8F6F\96C5\9ED1"',
    }
  }
});

interface TimeItemProps {
  subTitle: string,
  time: string,
  desc: string
}

function Timeline(props: { title: string, timeList: TimeItemProps[] }) {
  const classes = useStyles();
  const { title, timeList } = props;
  return (
    <div className={classes.root}>
      <h3>{title}</h3>
      {
        timeList.map((item, index) => (
          <React.Fragment key={index}>
            <p>{item.subTitle}</p>
            <i>{item.time}</i>
            <span>{item.desc}</span>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default Timeline;
