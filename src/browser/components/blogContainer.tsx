import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Home from '@material-ui/icons/Home';
import Category from '@material-ui/icons/Category';
import Archive from '@material-ui/icons/Archive';
import Bookmark from '@material-ui/icons/Bookmark';
import GitHub from '@material-ui/icons/GitHub';
import PersonPin from '@material-ui/icons/PersonPin';
import Web from '@material-ui/icons/Web';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Cloud from '@material-ui/icons/Cloud';
import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, useTheme, Theme, createStyles, fade, } from '@material-ui/core/styles';
import FootPrint from './footPrint';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    fixedZoom: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }),
);

interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
  contentClass?: string;
  navigatorList?: {
    name: string;
    icon: JSX.Element;
    link: string;
  }[],
  isLogin?: boolean,
  endpoint?: string
}

const navigatorList = [{
  name: '首页',
  icon: <Home />,
  link: ''
}, {
  name: '分类',
  icon: <Category />,
  link: '#/blog/aggregation/category'
}, {
  name: '归档',
  icon: <Archive />,
  link: '#/blog/aggregation/archive'
}, {
  name: '标签',
  icon: <Bookmark />,
  link: '#/blog/aggregation/tags'
}, {
  name: '关于豆米',
  icon: <PersonPin />,
  link: '#/about/doumi'
}, {
  name: '关于本站',
  icon: <Web />,
  link: '#/about/blog'
}, {
  name: '网站数据',
  icon: <Cloud />,
  link: '/'
}, {
  name: 'Github',
  icon: <GitHub />,
  link: 'https://github.com/linxiaowu66/doumi-blog'
}]
interface ScrollProps {
  children: React.ReactElement;
}
function ScrollTop(props: ScrollProps) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.fixedZoom}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BlogContainer(props: ContainerProps) {
  // const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = () => {
    location.hash = '#/blog/auth/login';
  }

  const handleLogout = async () => {
    const { endpoint } = props;
    await axios.post(`${endpoint ? endpoint : ''}/api/logout`, null, {withCredentials: true});

    location.hash = '#/blog/auth/login';
  }

  const navList = props.navigatorList ? props.navigatorList : navigatorList;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navList.map((item) => (
          <Link color="inherit" underline={"none"} href={item.link} key={item.name}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          {
            props.isLogin ? (
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
            ) : (
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
            )
          }
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="blog-navigators">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden xsUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={`${classes.content} ${props.contentClass}`}>
        <div className={classes.toolbar} />
        {
          props.children
        }
        {/* <iframe src="//music.163.com/song?id=1363948882&userid=99607736&auto=1&height=60"></iframe> */}
        {
          props.isLogin ? null : <FootPrint />
        }
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
