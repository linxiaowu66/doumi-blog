import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { DouMiBlog } from 'src/common/blog-protocol';
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
      },
      '& > *': {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: theme.spacing(30),
        height: theme.spacing(32),
      },
    },
    title: {
      fontSize: '14px',
      fontWeight: 'bolder',
      color: theme.palette.primary.main,
      paddingLeft: '5px',
      paddingBottom: '5px',
      borderBottom: '1px solid #e5e5e5',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      color: theme.palette.primary.light,
      backgroundColor: '#FFF',
    },
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
      }
    },
    name: {
      color: theme.palette.primary.main,
      '& span': {
        fontSize: '12px',
        fontWeight: 'bolder'
      }
    }
  }),
);

const key2Name: { [key: string]: string} = {
  totalPv: '访问次数',
  commentsNum: '评论总数',
  operationDays: '运行天数',
  articleCount: '文章总数',
  articlesWordsNum: '文章字数'
};

const key2Icon: { [key: string]: JSX.Element} = {
  totalPv: <VisibilityIcon />,
  commentsNum: <CommentIcon />,
  operationDays: <AccessTimeIcon />,
  articleCount: <DescriptionIcon />,
  articlesWordsNum: <TrendingUpIcon/>
};

export default function BlogSummary(props: { data: DouMiBlog.SummaryStats}) {
  const classes = useStyles();

  const transferData = Object.keys(props.data).map(key => ({
    name: key2Name[key],
    value: props.data[key],
    icon: key2Icon[key]
  }));

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classes.title}>博客信息</div>
        <List dense>
          {
            transferData.map(item => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.small}>
                    {
                      item.icon
                    }
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  className={classes.name}
                />
                <ListItemText primary={item.value} className={classes.value}/>
              </ListItem>
            ))
          }
        </List>
      </Paper>
    </div>
  );
}
