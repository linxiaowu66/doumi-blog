import * as React from 'react';
import QRCode from 'qrcode.react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  media: {
    height: 140,

  },
  listAction: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weixinShare: {
    position: 'relative',
  },
  qrCode: {
    position: 'absolute',
    padding: '6px',
    width: 126,
    height: 126,
    top: '-132px',
    background: '#FFF',
    border: '1px solid #eee',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-6px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      border: '1px solid #ebebeb',
      background: '#fff',
      width: 10,
      height: 10,
    }
  }
});

interface BlogItemProps {
  mediaUrl: string,
  digest: string,
  title: string,
  slug: string,
  // archiveTime: string
}

export default function BlogItem(props: BlogItemProps) {
  const classes = useStyles();
  const [isShowWeixinQrCode, setShow] = React.useState(false);

  const handleJumpToDetail = () => {
    window.open(`${location.origin}#/blog/detail/${props.slug}`, '_blank');
  };

  const handleToggleWeixin = () => {
    setShow(!isShowWeixinQrCode);
  };

  // eslint-disable-next-line max-len
  const sinaLink = `https://service.weibo.com/share/share.php?title=${props.title} - ${props.digest}&url=${window.location.origin + `/blog/${props.slug}`}&pic=${encodeURIComponent(props.mediaUrl)}`;
  const weixinLink = `${window.location.origin + `#/blog/detail/${props.slug}`}`;
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleJumpToDetail} className={classes.content}>
        <CardMedia
          className={classes.media}
          image={props.mediaUrl}
          title="blog illustration"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.digest}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.listAction}>
        <div>
          <Button size="small" color="primary" style={{ lineHeight: 1}}>
            <a href={sinaLink} target="__blank">
              { /* eslint-disable-next-line max-len */ }
              <svg fill="currentColor" viewBox="0 0 24 24" width="17" height="17"><path fill="#FB6622" d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131 6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346 4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097 3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z" fill-rule="evenodd"></path></svg>
            </a>
          </Button>
          <Button size="small" color="primary" style={{ lineHeight: 1}} className={classes.weixinShare} onClick={handleToggleWeixin}>
            { /* eslint-disable-next-line max-len */ }
            <svg color="#60C84D" fill="currentColor" viewBox="0 0 24 24" width="17" height="17"><path d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z" fill-rule="evenodd"></path></svg>
            <div className={classes.qrCode} style={isShowWeixinQrCode ? { display: 'block'} : { display: 'none'}}>
              <span style={{ color: 'rgba(0, 0, 0, 0.54)'}}>微信扫一扫</span>
              <QRCode value={weixinLink} size={94} includeMargin />
            </div>
          </Button>
        </div>
        <Button size="small" color="primary" onClick={handleJumpToDetail}>
          阅读全文
        </Button>
      </CardActions>
    </Card>
  );
}
