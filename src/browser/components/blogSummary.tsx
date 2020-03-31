import React from 'react';
import { Theme, createStyles, makeStyles ***REMOVED*** from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { DouMiBlog ***REMOVED*** from 'src/common/blog-protocol';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DescriptionIcon from '@material-ui/icons/Description';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      position: 'fixed',
      top: '20%',
      left: theme.spacing(10),
      '@media screen and (max-width: 992px)': {
        display: 'none'
    ***REMOVED***,
      '& > *': {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: theme.spacing(30),
        height: theme.spacing(32),
    ***REMOVED***,
  ***REMOVED***,
    title: {
      fontSize: '14px',
      fontWeight: 'bolder',
      color: theme.palette.primary.main,
      paddingLeft: '5px',
      paddingBottom: '5px',
      borderBottom: '1px solid #e5e5e5',
  ***REMOVED***,
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      color: theme.palette.primary.light,
      backgroundColor: '#FFF',
  ***REMOVED***,
    value: {
      color: theme.palette.primary.dark,
      width: theme.spacing(5),
      height: theme.spacing(3),
      background: '#e5e5e5',
      textAlign: 'center',
      borderRadius: '3px',
      '& span': {
        fontSize: '12px',
        fontWeight: 'bolder'
    ***REMOVED***
  ***REMOVED***,
    name: {
      color: theme.palette.primary.main,
      '& span': {
        fontSize: '12px',
        fontWeight: 'bolder'
    ***REMOVED***
  ***REMOVED***
***REMOVED***),
);

const key2Name: { [key: string]: string***REMOVED*** = {
  totalPv: '访问次数',
  commentsNum: '评论总数',
  operationDays: '运行天数',
  articleCount: '文章总数',
  articlesWordsNum: '文章字数'
***REMOVED***

const key2Icon: { [key: string]: JSX.Element***REMOVED*** = {
  totalPv: <VisibilityIcon />,
  commentsNum: <CommentIcon />,
  operationDays: <AccessTimeIcon />,
  articleCount: <DescriptionIcon />,
  articlesWordsNum: <TrendingUpIcon/>
***REMOVED***

export default function BlogSummary(props: { data: DouMiBlog.SummaryStats***REMOVED***) {
  const classes = useStyles();

  const transferData = Object.keys(props.data).map(key => ({
    name: key2Name[key],
    value: props.data[key],
    icon: key2Icon[key]
***REMOVED***));

  return (
    <div className={classes.root***REMOVED***>
      <Paper elevation={3***REMOVED***>
        <div className={classes.title***REMOVED***>博客信息</div>
        <List dense>
          {
            transferData.map(item => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.small***REMOVED***>
                    {
                      item.icon
                  ***REMOVED***
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name***REMOVED***
                  className={classes.name***REMOVED***
                />
                <ListItemText primary={item.value***REMOVED*** className={classes.value***REMOVED***/>
              </ListItem>
            ))
        ***REMOVED***
        </List>
      </Paper>
    </div>
  );
***REMOVED***
