import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Snackbar from '@material-ui/core/Snackbar';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';
import FootPrint from './footPrint';
import BlogAppBar from './blogAppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: '#f7f7f7',
    },
    toolbar: {
      minHeight: '82px',
    },

    content: {
      flexGrow: 1,
      overflow: 'hidden',
      background: '#FFF',
      padding: '10px',
      margin: `0 ${theme.spacing(45)}px`,
      '@media screen and (max-width: 992px)': {
        margin: '0 0',
      },
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
  const [snackBarOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.isOpenSnackbar !== snackBarOpen) {
      setOpen(props.isOpenSnackbar);
    }
  }, [props]);


  return (
    <div className={classes.root}>
      <BlogAppBar isLogin={props.isLogin}/>
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
