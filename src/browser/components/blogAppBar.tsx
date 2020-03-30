
import * as React from 'react';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, createStyles, Theme ***REMOVED*** from '@material-ui/core/styles';
import BlogSearch from './blogSearch';
import { navigatorListWithLogin, navigatorListWithNotLogin ***REMOVED*** from '../constants/navigators';
import { DouMiAvatar ***REMOVED*** from './doumiAvatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navHeader: {
      height: '82px',
      width: '100%',
      position: 'fixed',
      top: '0px',
      zIndex: 99,
      background: '#f8f8f8',
      '& .container': {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0 auto',
        // overflow: 'hidden',
        alignItems: 'center'
    ***REMOVED***,
      '& .logo': {
        padding: '20px',
        color: theme.palette.primary.main,
        fontSize: '1.5rem',
    ***REMOVED***,
      '& .tabs': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '& a': {
          padding: '10px 0px',
          marginRight: '50px',
          position: 'relative',
          // fontSize: '12px',
          '& :not(.with-icon)': {
            color: theme.palette.primary.main,
            '&::before, &::after': {
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '1px',
              background: theme.palette.primary.main,
              content: "''",
              opacity: 0.2,
              transition: 'opacity 0.3s, height 0.3s',
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***,

        '& a::after': {
          top: '100%',
          opacity: 0,
          transition: 'transform 0.3s, opacity 0.3s',
          transform: 'translateY(-10px)',
      ***REMOVED***,

        '& a span:first-child': {
          zIndex: 2,
          display: 'block',
          fontWeight: 'bold',
      ***REMOVED***,

        '& a span:last-child': {
          zIndex: 1,
          display: 'block',
          position: 'absolute',
          padding: '12px 0 0 0',
          color: theme.palette.primary.main,
          textShadow: 'none',
          textTransform: 'none',
          fontStyle: 'italic',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          fontFamily: 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
          opacity: 0,
          transition: 'transform 0.3s, opacity 0.3s',
          transform: 'translateY(-100%)',
      ***REMOVED***,

        '& a:hover::before, & a:focus::before, & a.active::before': {
          height: '6px',
      ***REMOVED***,

        '& a:hover::before, & a:hover::after, & a:focus::before, & a:focus::after, & a.active::before, & a.active::after': {
          opacity: 1,
          transform: 'translateY(0px)'
      ***REMOVED***,

        '& a:hover span:last-child, & a:focus span:last-child, & a.active span:last-child': {
          opacity: 1,
          transform: 'translateY(0%)',
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
    grow: {
      flexGrow: 1
  ***REMOVED***,
***REMOVED***),
);

interface AppBarProps {
  // handleDrawerToggle: () => void,
  endpoint?: string,
  isLogin?: boolean
***REMOVED***

export default function BlogAppBar(props: AppBarProps) {
  const { endpoint, isLogin ***REMOVED*** = props;

  const handleLogout = async () => {
    // eslint-disable-next-line no-null/no-null
    await axios.post(`${endpoint ? endpoint : ''***REMOVED***/api/logout`, null, {withCredentials: true***REMOVED***

    location.hash = '#/blog/auth/login';
  ***REMOVED***

  const classes = useStyles();

  const navList: {
    name: string;
    subName: string;
    link: string;
    icon?: JSX.Element
***REMOVED***[] = !isLogin ? navigatorListWithNotLogin : navigatorListWithLogin;

  return (
    <header key="header" className={classes.navHeader***REMOVED***>
      <div className="container">
        <div className="logo">
          <DouMiAvatar avatarSize={46***REMOVED*** />
        </div>

        <div className="tabs">
          {
            navList.map(item => {
              const isActive = location.hash.match(item.link) && item.link;
              return item.icon ? (
                <Tooltip title={item.name***REMOVED*** enterDelay={500***REMOVED***>
                  <a href={item.link***REMOVED*** className="with-icon" target="_blank" onClick={item.subName === 'Exit' ? () => handleLogout() : () => {***REMOVED******REMOVED***>
                    {
                      item.icon
                  ***REMOVED***
                  </a>
                </Tooltip>)
                : (
                  <Link className={isActive ? 'active' : ''***REMOVED*** color="inherit" underline={'none'***REMOVED*** href={item.link***REMOVED*** key={item.name***REMOVED***>
                    <span>{item.name***REMOVED***</span>
                    <span>{item.subName***REMOVED***</span>
                  </Link>);
          ***REMOVED***)
        ***REMOVED***
        </div>
        <BlogSearch />
      </div>
    </header>
  );
***REMOVED***
