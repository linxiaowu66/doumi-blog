
import * as React from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme ***REMOVED*** from '@material-ui/core/styles';
import BlogSearch from './blogSearch';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth***REMOVED***px)`,
        marginLeft: drawerWidth,
    ***REMOVED***,
  ***REMOVED***,
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
    ***REMOVED***,
      flexGrow: 1
  ***REMOVED***,
    grow: {
      flexGrow: 1
  ***REMOVED***,
***REMOVED***),
);

interface AppBarProps {
  handleDrawerToggle: () => void,
  endpoint?: string,
  isLogin?: boolean
***REMOVED***

export default function BlogAppBar(props: AppBarProps) {
  const { endpoint, isLogin, handleDrawerToggle ***REMOVED*** = props;
  const handleLogin = () => {
    location.hash = '#/blog/auth/login';
***REMOVED***

  const handleLogout = async () => {
    await axios.post(`${endpoint ? endpoint : ''***REMOVED***/api/logout`, null, {withCredentials: true***REMOVED***

    location.hash = '#/blog/auth/login';
***REMOVED***

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar***REMOVED***>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle***REMOVED***
          className={classes.menuButton***REMOVED***
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          豆米的博客
        </Typography>
        <BlogSearch />
        <div className={classes.grow***REMOVED*** />
        {
          isLogin ? (
            <Tooltip title={'退出登录'***REMOVED*** enterDelay={500***REMOVED***>
              <IconButton
                edge="end"
                aria-label="logout"
                // aria-controls={menuId***REMOVED***
                aria-haspopup="true"
                onClick={handleLogout***REMOVED***
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={'登录'***REMOVED*** enterDelay={500***REMOVED***>
              <IconButton
                edge="end"
                aria-label="login"
                // aria-controls={menuId***REMOVED***
                aria-haspopup="true"
                onClick={handleLogin***REMOVED***
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          )
      ***REMOVED***
      </Toolbar>
    </AppBar>
  )
***REMOVED***
