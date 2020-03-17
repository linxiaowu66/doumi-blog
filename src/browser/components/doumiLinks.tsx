import * as React from 'react';
import { withStyles, Theme ***REMOVED*** from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Typography from './typography';

const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
***REMOVED***,
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap' as 'wrap', // 傻Ts，没办法~
***REMOVED***,
  imageWrapper: {
    position: 'relative' as 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
  ***REMOVED***,
    '&:hover': {
      zIndex: 1,
  ***REMOVED***,
    '&:hover $imageBackdrop': {
      opacity: 0.15,
  ***REMOVED***,
    '&:hover $imageMarked': {
      opacity: 0,
  ***REMOVED***,
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
  ***REMOVED***,
***REMOVED***,
  imageButton: {
    position: 'absolute' as 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
***REMOVED***,
  imageSrc: {
    position: 'absolute' as 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
***REMOVED***,
  imageBackdrop: {
    position: 'absolute' as 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
***REMOVED***,
  imageTitle: {
    position: 'relative' as 'relative',
    padding: `${theme.spacing(2)***REMOVED***px ${theme.spacing(4)***REMOVED***px 14px`,
***REMOVED***,
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute' as 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
***REMOVED***,
***REMOVED***

function DouMiLinks(props: LinksProp) {
  const { classes ***REMOVED*** = props;

  const images = [
    {
      url:
        'https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/%E6%96%AD%E6%A1%A5%E6%AE%8B%E9%9B%AA.jpeg?x-oss-process=image/resize,h_300',
      title: '断桥残雪',
      width: '33.3%',
      link: '#/blog/list'
  ***REMOVED***,
    {
      url:
        'https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/%E8%A5%BF%E6%BA%AA%E6%B9%BF%E5%9C%B0.jpg?x-oss-process=image/resize,h_300',
      title: '西溪湿地',
      width: '33.3%',
      link: '#/website/stats'
  ***REMOVED***,
    {
      url:
        'https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/%E4%B9%9D%E6%BA%AA%E7%83%9F%E6%A0%91.jpg?x-oss-process=image/resize,h_300',
      title: '九溪烟树',
      width: '33.3%',
      link: '#/about/blog'
  ***REMOVED***,
    {
      url:
        'https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/%E8%8B%8F%E5%A0%A4.jpeg?x-oss-process=image/resize,h_300',
      title: '苏堤春晓',
      width: '33.3%',
      link: '#/website/stats'
  ***REMOVED***,
    {
      url:
        'https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/%E6%B9%98%E6%B9%96.jpg?x-oss-process=image/resize,h_300',
      title: '湘湖',
      width: '33.3%',
      link: '#/about/blog'
  ***REMOVED***,
    {
      url:
        'https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/homePage/douMi.jpg?x-oss-process=image/resize,h_300',
      title: '豆米',
      width: '33.3%',
      link: '#/about/doumi'
  ***REMOVED***,
  ];

  return (
    <Container className={classes.root***REMOVED*** component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        杭州美景
      </Typography>
      <div className={classes.images***REMOVED***>
        {images.map(image => (
          <ButtonBase
            key={image.title***REMOVED***
            className={classes.imageWrapper***REMOVED***
            style={{
              width: image.width,
          ***REMOVED******REMOVED***
            onClick={() => location.href = image.link ***REMOVED***
          >
            <div
              className={classes.imageSrc***REMOVED***
              style={{
                backgroundImage: `url(${image.url***REMOVED***)`,
            ***REMOVED******REMOVED***
            />
            <div className={classes.imageBackdrop***REMOVED*** />
            <div className={classes.imageButton***REMOVED***>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle***REMOVED***
              >
                {image.title***REMOVED***
                <div className={classes.imageMarked***REMOVED*** />
              </Typography>
            </div>
          </ButtonBase>
        ))***REMOVED***
      </div>
    </Container>
  );
***REMOVED***

export interface LinksProp {
  classes: {[key: string]: any***REMOVED***,
***REMOVED***

export default withStyles(styles)(DouMiLinks);
