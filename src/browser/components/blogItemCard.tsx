import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: 10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    time: {
      fontSize: 14,
    },
    title: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

interface BlogItemCardProps {
  title: string,
  archiveTime: string,
  category: string,
  tags: string[],
  content: string,
  slug: string,
  onClick: (content: string) => void,
  onEdit: (slug: string) => void
}

export default function BlogItemCard(props: BlogItemCardProps) {
  const classes = useStyles();

  const { title, archiveTime, category, tags } = props;

  return (
    <Card className={classes.card} onClick={() => props.onClick(props.content)}>
      <CardContent>
        <Typography className={classes.time} color="textSecondary" gutterBottom>
          {archiveTime}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {category}
        </Typography>
        <Typography variant="body2" component="div">
          {tags.map((item) => (
            <Chip
              key={item}
              icon={<TagFacesIcon />}
              label={item}
              color="secondary"
              className={classes.chip}
              size="small"
            />
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.onEdit(props.slug)}>编辑</Button>
        <Button size="small">删除</Button>
      </CardActions>
    </Card>
  );
}
