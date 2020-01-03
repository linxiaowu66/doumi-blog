import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Home, Category, Archive, Bookmark, GitHub, PersonPin, Web, Menu, AccountCircle, Cloud ***REMOVED*** from '@material-ui/icons'
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
  children: React.ReactElement;
***REMOVED***

const navigatorList = [{
  name: '首页',
  icon: <Home />
***REMOVED***, {
  name: '分类',
  icon: <Category />
***REMOVED***, {
  name: '归档',
  icon: <Archive />
***REMOVED***, {
  name: '标签',
  icon: <Bookmark />
***REMOVED***, {
  name: '关于豆米',
  icon: <PersonPin />
***REMOVED***, {
  name: '关于本站',
  icon: <Web />
***REMOVED***, {
  name: '网站数据',
  icon: <Cloud />
***REMOVED***, {
  name: 'Github',
  icon: <GitHub />
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

  const drawer = (
    <div>
      <div className={classes.toolbar***REMOVED*** />
      <Divider />
      <List>
        {navigatorList.map((item, index) => (
          <ListItem button key={item.name***REMOVED***>
            <ListItemIcon>{item.icon***REMOVED***</ListItemIcon>
            <ListItemText primary={item.name***REMOVED*** />
          </ListItem>
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
          <IconButton
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId***REMOVED***
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen***REMOVED***
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
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
      <main className={classes.content***REMOVED***>
        <div className={classes.toolbar***REMOVED*** />
        {
          props.children
      ***REMOVED***
        <FootPrint />
      </main>
      <ScrollTop {...props***REMOVED***>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
***REMOVED***
