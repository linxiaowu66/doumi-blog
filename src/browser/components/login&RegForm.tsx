import * as React from "react";
import { useForm ***REMOVED*** from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles ***REMOVED*** from '@material-ui/core/styles';

interface FormProps {
  type: 'login' | 'register',
  visible: boolean,
  actionSuccess: boolean,
  registerCb: (param: {email: string, username: string, password: string***REMOVED***) => void
  loginCb?: (param: {email: string, password: string***REMOVED***) => void
***REMOVED***

const useStyles = makeStyles({
  root: (props: {visible: boolean, success: boolean***REMOVED***) => ({
    position: 'relative' as 'relative',
    width: '100%',
    height: '94%',
    float: 'left',
    left: props.visible ? 0 : -390,
    transition: 'all 500ms',
    'transition-delay': '500ms',
    bottom: props.success ? '-600px' : 0,
    '& header': {
      color: '#fff',
      fontSize: '2rem',
      marginTop: 15,
      marginBottom: 15,
      textAlign: 'center'
  ***REMOVED***,
    '& button': {
      marginTop: 20,
  ***REMOVED***
***REMOVED***)
***REMOVED***)

export default function LoginRegForm(props: FormProps) {
  const { handleSubmit, errors, register ***REMOVED*** = useForm();
  const { type ***REMOVED*** = props;

  const onSubmit = (data: any) => {
    if (type === 'register') {
      props.registerCb(data)
  ***REMOVED***
***REMOVED***

  const classes = useStyles({visible: props.visible, success: props.actionSuccess***REMOVED***
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)***REMOVED*** noValidate className={classes.root***REMOVED***>
        <header>JOIN</header>
        <TextField
          id="outlined-email-input-required"
          label="邮箱地址"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          fullWidth
          variant="outlined"
          error={!!errors.email***REMOVED***
          inputRef={register({
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3***REMOVED***\.[0-9]{1,3***REMOVED***\.[0-9]{1,3***REMOVED***\.[0-9]{1,3***REMOVED***])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,***REMOVED***))$/
        ***REMOVED***)***REMOVED***
          helperText={errors.email && "无效的邮箱地址"***REMOVED***
        />
        {
          type === 'register' ? (
          <TextField
            id="outlined-name-input-required"
            label="昵称"
            type="text"
            name="username"
            margin="normal"
            fullWidth
            variant="outlined"
            error={!!errors.username***REMOVED***
            inputRef={register***REMOVED***
            helperText={errors.username && "用户名格式不正确"***REMOVED***
          />
          ): null
      ***REMOVED***
        <TextField
          id="outlined-password-input-required"
          label="密码"
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register***REMOVED***
          helperText={errors.password && "密码错误"***REMOVED***
        />
        <Button type="submit" size="large" color="secondary" variant="contained" fullWidth>
          {type === 'register' ? '注册' : '登录'***REMOVED***
        </Button>
      </form>
    </React.Fragment>
  );
***REMOVED***
