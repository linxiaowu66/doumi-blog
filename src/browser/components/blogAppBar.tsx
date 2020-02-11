
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
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BlogSearch from './blogSearch';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
  }),
);

interface AppBarProps {
  handleDrawerToggle: () => void,
  endpoint?: string,
  isLogin?: boolean
}

export default function BlogAppBar(props: AppBarProps) {
  const { endpoint, isLogin, handleDrawerToggle } = props;
  const handleLogin = () => {
    location.hash = '#/blog/auth/login';
  }

  const handleLogout = async () => {
    await axios.post(`${endpoint ? endpoint : ''}/api/logout`, null, {withCredentials: true});

    location.hash = '#/blog/auth/login';
  }

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          豆米的博客
        </Typography>
        <BlogSearch />
        <div className={classes.grow} />
        {
          isLogin ? (
            <Tooltip title={'退出登录'} enterDelay={500}>
              <IconButton
                edge="end"
                aria-label="logout"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={'登录'} enterDelay={500}>
              <IconButton
                edge="end"
                aria-label="login"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleLogin}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          )
        }
      </Toolbar>
    </AppBar>
  )
}
