import * as React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

// 这里定制，可以替换成自己的头像
const douMi = require('../images/douMi.jpg');

export interface AvatarProps {
  avatarSize: number
}

const useStyles = makeStyles({
  doumiAvatar: (props: AvatarProps) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '&::before': {
      width: '100%',
      content: '""',
      height: 1,
      backgroundColor: '#EBF2F6',
      position: 'absolute',
      top: '50%',
    },
    '& .avatar': {
      width: props.avatarSize,
      height: props.avatarSize,
      boxShadow: '#E7EEF2 0 0 0 6px',
    }
  })
});

export function DouMiAvatar(props: AvatarProps) {
  const classes = useStyles(props);

  return (
    <div className={classes.doumiAvatar}>
      <Avatar alt='豆米的画像' src={douMi} className='avatar' />
    </div>
  );
}
