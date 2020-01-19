import * as React from 'react';
import { createStyles, makeStyles, Theme ***REMOVED*** from '@material-ui/core/styles';
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
  ***REMOVED***,
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
  ***REMOVED***,
    time: {
      fontSize: 14,
  ***REMOVED***,
    title: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
  ***REMOVED***,
    chip: {
      margin: theme.spacing(0.5),
  ***REMOVED***,
    pos: {
      marginBottom: 12,
  ***REMOVED***,
***REMOVED***),
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
***REMOVED***

export default function BlogItemCard(props: BlogItemCardProps) {
  const classes = useStyles();

  const { title, archiveTime, category, tags ***REMOVED*** = props;

  return (
    <Card className={classes.card***REMOVED*** onClick={() => props.onClick(props.content)***REMOVED***>
      <CardContent>
        <Typography className={classes.time***REMOVED*** color="textSecondary" gutterBottom>
          {archiveTime***REMOVED***
        </Typography>
        <Typography className={classes.title***REMOVED*** variant="h5" component="h2">
          {title***REMOVED***
        </Typography>
        <Typography className={classes.pos***REMOVED*** color="textSecondary">
          {category***REMOVED***
        </Typography>
        <Typography variant="body2" component="div">
          {tags.map((item) => (
            <Chip
              key={item***REMOVED***
              icon={<TagFacesIcon />***REMOVED***
              label={item***REMOVED***
              color="secondary"
              className={classes.chip***REMOVED***
              size="small"
            />
          ))***REMOVED***
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.onEdit(props.slug)***REMOVED***>编辑</Button>
        <Button size="small">删除</Button>
      </CardActions>
    </Card>
  );
***REMOVED***
