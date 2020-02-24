import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import MoodBad from '@material-ui/icons/MoodBad';
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
    cat: {
      color: '#1f8dff',
      listStyle: 'none',
      padding: '0px',
      '& li': {
        fontWeight: 'bold',
        textShadow: '0 5px 8px rgba(0, 0, 0, 0.1)',
      },
      '& li svg': {
        marginRight: '10px',
      }
    },
    tags: {
      color: '#8f1eff',
      listStyle: 'none',
      padding: '0px',
      '& li': {
        fontWeight: 'bold',
        textShadow: '0 5px 8px rgba(0, 0, 0, 0.1)',
      },
      '& li svg': {
        marginRight: '10px',
      }
    }
  }),
);

interface BlogItemCardProps {
  title: string,
  archiveTime: string,
  category: string,
  tags: string[],
  slug: string,
  articleStatus: string,
  onClick: () => void,
  onEdit: (slug: string) => void
}

export default function BlogItemCard(props: BlogItemCardProps) {
  const classes = useStyles();

  const { title, archiveTime, category, tags, articleStatus } = props;

  // eslint-disable-next-line max-len
  const svgPath = 'm39.4 0.2q0.7 0.6 0.6 1.5l-5.7 34.3q-0.1 0.6-0.7 1-0.4 0.1-0.7 0.1-0.3 0-0.6-0.1l-10.1-4.1-5.4 6.6q-0.4 0.5-1.1 0.5-0.3 0-0.5-0.1-0.4-0.1-0.7-0.5t-0.2-0.8v-7.8l19.3-23.7-23.9 20.7-8.8-3.6q-0.8-0.3-0.9-1.3 0-0.8 0.7-1.3l37.2-21.4q0.3-0.2 0.7-0.2 0.4 0 0.8 0.2z';

  // eslint-disable-next-line max-len
  const svgPath1 = 'm22.1 22.9l1.5-5.8h-5.7l-1.4 5.8h5.6z m17.2-11.3l-1.3 5q-0.1 0.5-0.7 0.5h-7.3l-1.4 5.8h6.9q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-1.2 5q-0.1 0.5-0.7 0.5h-7.3l-1.8 7.3q-0.2 0.5-0.7 0.5h-5q-0.4 0-0.6-0.2-0.2-0.3-0.1-0.6l1.7-7h-5.7l-1.8 7.3q-0.1 0.5-0.7 0.5h-5q-0.3 0-0.5-0.2-0.2-0.3-0.2-0.6l1.8-7h-7q-0.3 0-0.5-0.3-0.2-0.2-0.2-0.6l1.3-5q0.1-0.5 0.7-0.5h7.3l1.4-5.8h-6.9q-0.4 0-0.6-0.2-0.2-0.3-0.1-0.6l1.2-5q0.1-0.6 0.7-0.6h7.3l1.8-7.3q0.2-0.5 0.7-0.5h5q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-1.7 6.9h5.7l1.8-7.3q0.1-0.5 0.7-0.5h5q0.3 0 0.5 0.2 0.2 0.3 0.2 0.7l-1.8 6.9h7q0.3 0 0.5 0.3 0.2 0.3 0.2 0.6z';

  return (
    <Card className={classes.card} onClick={() => props.onClick()}>
      <CardContent>
        <Typography className={classes.time} color="textSecondary" gutterBottom>
          {archiveTime}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <ul className={classes.cat}>
            <li>
              <svg
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                height="1em"
                width="1em"
                viewBox="0 0 40 40"
                style={{verticalAlign: 'middle'}}>
                <g>
                  <path d={svgPath} />
                </g>
              </svg>
              {category}
            </li>
          </ul>
          <ul className={classes.tags}>
            {
              tags.map((item, idx) => (
                <li key={idx}>
                  <svg
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                    height="1em"
                    width="1em"
                    viewBox="0 0 40 40"
                    style={{verticalAlign: 'middle'}}>
                    <g>
                      <path d={svgPath1} />
                    </g>
                  </svg>
                  {item}
                </li>
              ))
            }
          </ul>
        </Typography>
        <Typography variant="body2" component="div">
          <Chip
            icon={articleStatus === 'published' ? <TagFacesIcon /> : <MoodBad />}
            label={articleStatus === 'published' ? '已发布' : '草稿中'}
            color={articleStatus === 'published' ? 'primary': 'secondary'}
            className={classes.chip}
            size="small"
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.onEdit(props.slug)}>编辑</Button>
        <Button size="small">删除</Button>
      </CardActions>
    </Card>
  );
}
