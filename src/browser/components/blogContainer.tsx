import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { Home, Category, Archive, Bookmark, GitHub, PersonPin, Web, Menu, AccountCircle, Cloud, ExitToApp

***REMOVED*** from '@material-ui/icons'
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
import { makeStyles, useTheme, Theme, createStyles, fade, ***REMOVED*** from '@material-ui/core/styles';
import FootPrint from './footPrint';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
  ***REMOVED***,
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
    ***REMOVED***,
  ***REMOVED***,
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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
  ***REMOVED***,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
  ***REMOVED***,
    fixedZoom: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
  ***REMOVED***,
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
    ***REMOVED***,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    ***REMOVED***,
  ***REMOVED***,
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  ***REMOVED***,
    inputRoot: {
      color: 'inherit',
  ***REMOVED***,
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***,
***REMOVED***),
);

interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
  contentClass?: string;
  navigatorList?: {
    name: string;
    icon: JSX.Element;
    link: string;
***REMOVED***[],
  isLogin?: boolean,
  endpoint?: string
***REMOVED***

const navigatorList = [{
  name: '首页',
  icon: <Home />,
  link: ''
***REMOVED***, {
  name: '分类',
  icon: <Category />,
  link: '#/blog/aggregation/category'
***REMOVED***, {
  name: '归档',
  icon: <Archive />,
  link: '#/blog/aggregation/archive'
***REMOVED***, {
  name: '标签',
  icon: <Bookmark />,
  link: '#/blog/aggregation/tags'
***REMOVED***, {
  name: '关于豆米',
  icon: <PersonPin />,
  link: '#/about/doumi'
***REMOVED***, {
  name: '关于本站',
  icon: <Web />,
  link: '#/about/blog'
***REMOVED***, {
  name: '网站数据',
  icon: <Cloud />,
  link: '/'
***REMOVED***, {
  name: 'Github',
  icon: <GitHub />,
  link: 'https://github.com/linxiaowu66/doumi-blog'
***REMOVED***]
interface ScrollProps {
  children: React.ReactElement;
***REMOVED***
function ScrollTop(props: ScrollProps) {
  const { children ***REMOVED*** = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  ***REMOVED***

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' ***REMOVED***
  ***REMOVED***
  ***REMOVED***

  return (
    <Zoom in={trigger***REMOVED***>
      <div onClick={handleClick***REMOVED*** role="presentation" className={classes.fixedZoom***REMOVED***>
        {children***REMOVED***
      </div>
    </Zoom>
  );
***REMOVED***

export default function BlogContainer(props: ContainerProps) {
  // const { container ***REMOVED*** = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  ***REMOVED***

  const handleLogin = () => {
    location.hash = '#/blog/auth/login';
***REMOVED***

  const handleLogout = async () => {
    const { endpoint ***REMOVED*** = props;
    await axios.post(`${endpoint ? endpoint : ''***REMOVED***/api/logout`, null, {withCredentials: true***REMOVED***

    location.hash = '#/blog/auth/login';
***REMOVED***

  const navList = props.navigatorList ? props.navigatorList : navigatorList;

  const drawer = (
    <div>
      <div className={classes.toolbar***REMOVED*** />
      <Divider />
      <List>
        {navList.map((item) => (
          <Link color="inherit" underline={"none"***REMOVED*** href={item.link***REMOVED*** key={item.name***REMOVED***>
            <ListItem button>
              <ListItemIcon>{item.icon***REMOVED***</ListItemIcon>
              <ListItemText primary={item.name***REMOVED*** />
            </ListItem>
          </Link>
        ))***REMOVED***
      </List>
    </div>
  );

  return (
    <div className={classes.root***REMOVED***>
      <CssBaseline />
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
          <div className={classes.search***REMOVED***>
            <div className={classes.searchIcon***REMOVED***>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            ***REMOVED******REMOVED***
              inputProps={{ 'aria-label': 'search' ***REMOVED******REMOVED***
            />
          </div>
          <div className={classes.grow***REMOVED*** />
          {
            props.isLogin ? (
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
            ) : (
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
            )
        ***REMOVED***
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer***REMOVED*** aria-label="blog-navigators">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */***REMOVED***
        <Hidden xsUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'***REMOVED***
            open={mobileOpen***REMOVED***
            onClose={handleDrawerToggle***REMOVED***
            classes={{
              paper: classes.drawerPaper,
          ***REMOVED******REMOVED***
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
          ***REMOVED******REMOVED***
          >
            {drawer***REMOVED***
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
          ***REMOVED******REMOVED***
            variant="permanent"
            open
          >
            {drawer***REMOVED***
          </Drawer>
        </Hidden>
      </nav>
      <main className={`${classes.content***REMOVED*** ${props.contentClass***REMOVED***`***REMOVED***>
        <div className={classes.toolbar***REMOVED*** />
        {
          props.children
      ***REMOVED***
        {/* <iframe src="//music.163.com/song?id=1363948882&userid=99607736&auto=1&height=60"></iframe> */***REMOVED***
        {
          props.isLogin ? null : <FootPrint />
      ***REMOVED***
      </main>
      <ScrollTop {...props***REMOVED***>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
***REMOVED***
