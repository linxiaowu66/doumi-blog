import * as React from 'react';
import { makeStyles, Theme, createStyles ***REMOVED*** from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
  ***REMOVED***,
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
  ***REMOVED***,
***REMOVED***),
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
***REMOVED***

interface BreadcrumbsProps {
  position: string;
  icon: React.ReactElement;
***REMOVED***

export default function IconBreadcrumbs(props: BreadcrumbsProps) {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick***REMOVED*** className={classes.link***REMOVED***>
        <HomeIcon className={classes.icon***REMOVED*** />
        豆米博客
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick***REMOVED***
        className={classes.link***REMOVED***
      >
        <WhatshotIcon className={classes.icon***REMOVED*** />
        博文概览
      </Link>
      <Typography color="textPrimary" className={classes.link***REMOVED***>
        <span className={classes.icon***REMOVED***>
        {
          props.icon
      ***REMOVED***
        </span>
        {
          props.position
      ***REMOVED***
      </Typography>
    </Breadcrumbs>
  );
***REMOVED***
