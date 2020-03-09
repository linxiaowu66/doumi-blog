import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Snackbar from '@material-ui/core/Snackbar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';
import FootPrint from './footPrint';
import BlogAppBar from './blogAppBar';
import { navigatorListWithLogin, navigatorListWithNotLogin } from '../constants/navigators';

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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(3),
    },
    fixedZoom: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
  contentClass?: string;
  isLogin?: boolean,
  endpoint?: string,
  isOpenSnackbar: boolean,
  snackbarMsg?: string,
  closeSnackBar?: () => void,
}

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
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [snackBarOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.isOpenSnackbar !== snackBarOpen) {
      setOpen(props.isOpenSnackbar);
    }
  }, [props]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navList = props.isLogin ? navigatorListWithLogin : navigatorListWithNotLogin;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navList.map(item => {
          const isActive = location.hash.match(item.link) && item.link;
          return (
            <Link color="inherit" underline={'none'} href={item.link} key={item.name}>
              <ListItem button style={isActive ? {backgroundColor: 'rgba(17, 157, 85, 0.4)'} : {}}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BlogAppBar
        endpoint={props.endpoint}
        isLogin={props.isLogin}
        handleDrawerToggle={handleDrawerToggle}
      />
      <nav className={classes.drawer} aria-label="blog-navigators">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden xsUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
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
        <div className={classes.toolbar} id="back-to-top-anchor" />
        {
          props.children
        }
        {
          // eslint-disable-next-line no-null/no-null
          props.isLogin ? null : <FootPrint />
        }
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Snackbar
        autoHideDuration={1500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={'top,right'}
        open={snackBarOpen}
        onClose={() => { setOpen(false); props.closeSnackBar && props.closeSnackBar(); }}
        message={props.snackbarMsg}
      />
    </div>
  );
}
