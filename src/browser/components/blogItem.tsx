import * as React from 'react';
import { makeStyles ***REMOVED*** from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
***REMOVED***,
  content: {
    flexGrow: 1,
***REMOVED***,
  media: {
    height: 140,

***REMOVED***,
***REMOVED***

interface BlogItemProps {
  mediaUrl: string,
  digest: string,
  title: string,
  slug: string,
  // archiveTime: string
***REMOVED***

export default function BlogItem(props: BlogItemProps) {
  const classes = useStyles();

  const handleJumpToDetail = () => {
    location.hash=`#/blog/detail/${props.slug***REMOVED***`
***REMOVED***

  return (
    <Card className={classes.card***REMOVED***>
      <CardActionArea onClick={handleJumpToDetail***REMOVED*** className={classes.content***REMOVED***>
        <CardMedia
          className={classes.media***REMOVED***
          image={props.mediaUrl***REMOVED***
          title="blog illustration"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.title ***REMOVED***
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.digest***REMOVED***
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          分享
        </Button>
        <Button size="small" color="primary" onClick={handleJumpToDetail***REMOVED***>
          阅读全文
        </Button>
      </CardActions>
    </Card>
  );
***REMOVED***
