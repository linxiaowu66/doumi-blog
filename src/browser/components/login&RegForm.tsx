import * as React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface FormProps {
  type: 'login' | 'register',
  visible: boolean,
  actionSuccess: boolean,
  registerCb: (param: {email: string, username: string, password: string}) => void
  loginCb: (param: {email: string, password: string}) => void
}

const useStyles = makeStyles({
  root: (props: {visible: boolean, success: boolean}) => ({
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
    },
    '& button': {
      marginTop: 20,
    }
  })
})

export default function LoginRegForm(props: FormProps) {
  const { handleSubmit, errors, register } = useForm();
  const { type } = props;

  const onSubmit = (data: any) => {
    if (type === 'register') {
      props.registerCb(data)
    } else {
      props.loginCb(data)
    }
  }

  const classes = useStyles({visible: props.visible, success: props.actionSuccess});
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.root}>
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
          error={!!errors.email}
          inputRef={register({
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          helperText={errors.email && "无效的邮箱地址"}
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
            error={!!errors.username}
            inputRef={register}
            helperText={errors.username && "用户名格式不正确"}
          />
          ): null
        }
        <TextField
          id="outlined-password-input-required"
          label="密码"
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register}
          helperText={errors.password && "密码错误"}
        />
        <Button type="submit" size="large" color="secondary" variant="contained" fullWidth>
          {type === 'register' ? '注册' : '登录'}
        </Button>
      </form>
    </React.Fragment>
  );
}
