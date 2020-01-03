import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  },
  media: {
    height: 140,
  },
});

interface BlogItemProps {
  mediaUrl: string,
  digest: string,
  title: string,
  archiveTime: string
}

export default function BlogItem(props: BlogItemProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.mediaUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.digest}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          分享
        </Button>
        <Button size="small" color="primary">
          阅读更多
        </Button>
      </CardActions>
    </Card>
  );
}
