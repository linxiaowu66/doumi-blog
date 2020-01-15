import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BlogItemCard(props: {title: string, archiveTime: string, category: string, tags: string[]}) {
  const classes = useStyles();

  const { title, archiveTime, category, tags } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {archiveTime}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {category}
        </Typography>
        <Typography variant="body2" component="p">
          {tags.map((item, idx) => <span key={idx}>#{item}</span>)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">编辑</Button>
        <Button size="small">删除</Button>
      </CardActions>
    </Card>
  );
}
