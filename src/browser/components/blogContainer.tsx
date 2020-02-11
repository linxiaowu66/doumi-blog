import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import IconList from '@material-ui/icons/List';
import Home from '@material-ui/icons/Home';
import Category from '@material-ui/icons/Category';
import Archive from '@material-ui/icons/Archive';
import Bookmark from '@material-ui/icons/Bookmark';
import GitHub from '@material-ui/icons/GitHub';
import PersonPin from '@material-ui/icons/PersonPin';
import Web from '@material-ui/icons/Web';
import Cloud from '@material-ui/icons/Cloud';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, Theme, createStyles, ***REMOVED*** from '@material-ui/core/styles';
import FootPrint from './footPrint';
import BlogAppBar from './blogAppBar';

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
  name: '博文列表',
  icon: <IconList />,
  link: '#/blog/list'
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
  link: '/#/website'
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
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  ***REMOVED***

  const navList = props.navigatorList ? props.navigatorList : navigatorList;

  const drawer = (
    <div>
      <div className={classes.toolbar***REMOVED*** />
      <Divider />
      <List>
        {navList.map((item) => {
          const isActive = location.hash.match(item.link) && item.link
          return (
          <Link color="inherit" underline={"none"***REMOVED*** href={item.link***REMOVED*** key={item.name***REMOVED***>
            <ListItem button style={isActive ? {backgroundColor: 'rgba(17, 157, 85, 0.4)'***REMOVED*** : {***REMOVED******REMOVED***>
              <ListItemIcon>{item.icon***REMOVED***</ListItemIcon>
              <ListItemText primary={item.name***REMOVED*** />
            </ListItem>
          </Link>
          )
    ***REMOVED***)***REMOVED***
      </List>
    </div>
  );

  return (
    <div className={classes.root***REMOVED***>
      <CssBaseline />
      <BlogAppBar
        endpoint={props.endpoint***REMOVED***
        isLogin={props.isLogin***REMOVED***
        handleDrawerToggle={handleDrawerToggle***REMOVED***
      />
      <nav className={classes.drawer***REMOVED*** aria-label="blog-navigators">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */***REMOVED***
        <Hidden xsUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'***REMOVED***
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
