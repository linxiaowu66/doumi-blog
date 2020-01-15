import * as React from 'react';
import { makeStyles ***REMOVED*** from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
***REMOVED***,
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
***REMOVED***,
  title: {
    fontSize: 14,
***REMOVED***,
  pos: {
    marginBottom: 12,
***REMOVED***,
***REMOVED***

export default function BlogItemCard(props: {title: string, archiveTime: string, category: string, tags: string[]***REMOVED***) {
  const classes = useStyles();

  const { title, archiveTime, category, tags ***REMOVED*** = props;

  return (
    <Card className={classes.card***REMOVED***>
      <CardContent>
        <Typography className={classes.title***REMOVED*** color="textSecondary" gutterBottom>
          {archiveTime***REMOVED***
        </Typography>
        <Typography variant="h5" component="h2">
          {title***REMOVED***
        </Typography>
        <Typography className={classes.pos***REMOVED*** color="textSecondary">
          {category***REMOVED***
        </Typography>
        <Typography variant="body2" component="p">
          {tags.map((item, idx) => <span key={idx***REMOVED***>#{item***REMOVED***</span>)***REMOVED***
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">编辑</Button>
        <Button size="small">删除</Button>
      </CardActions>
    </Card>
  );
***REMOVED***
