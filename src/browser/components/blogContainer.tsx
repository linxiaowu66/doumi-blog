import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Snackbar from '@material-ui/core/Snackbar';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, Theme, createStyles, ***REMOVED*** from '@material-ui/core/styles';
import FootPrint from './footPrint';
import BlogAppBar from './blogAppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: '#f7f7f7',
  ***REMOVED***,
    toolbar: {
      minHeight: '82px',
  ***REMOVED***,

    content: {
      flexGrow: 1,
      overflow: 'hidden',
      background: '#FFF',
      padding: '10px',
      margin: `0 ${theme.spacing(45)***REMOVED***px`,
      '@media screen and (max-width: 992px)': {
        margin: '0 0',
    ***REMOVED***,
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
  isLogin?: boolean,
  endpoint?: string,
  isOpenSnackbar: boolean,
  snackbarMsg?: string,
  closeSnackBar?: () => void,
***REMOVED***

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
  const [snackBarOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.isOpenSnackbar !== snackBarOpen) {
      setOpen(props.isOpenSnackbar);
  ***REMOVED***
***REMOVED***, [props]);


  return (
    <div className={classes.root***REMOVED***>
      <BlogAppBar isLogin={props.isLogin***REMOVED***/>
      <main className={`${classes.content***REMOVED*** ${props.contentClass***REMOVED***`***REMOVED***>
        <div className={classes.toolbar***REMOVED*** id="back-to-top-anchor" />
        {
          props.children
      ***REMOVED***
        {
          // eslint-disable-next-line no-null/no-null
          props.isLogin ? null : <FootPrint />
      ***REMOVED***
      </main>
      <ScrollTop {...props***REMOVED***>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Snackbar
        autoHideDuration={1500***REMOVED***
        anchorOrigin={{ vertical: 'top', horizontal: 'center' ***REMOVED******REMOVED***
        key={'top,right'***REMOVED***
        open={snackBarOpen***REMOVED***
        onClose={() => { setOpen(false); props.closeSnackBar && props.closeSnackBar(); ***REMOVED******REMOVED***
        message={props.snackbarMsg***REMOVED***
      />
    </div>
  );
***REMOVED***
