import * as React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface FormProps {
  type: 'login' | 'register',
  visible: boolean
}

const useStyles = makeStyles({
  root: (props: boolean) => ({
    position: 'relative' as 'relative',
    width: '100%',
    height: '94%',
    float: 'left',
    left: props ? 0 : -390,
    transition: 'all 500ms',
    'transition-delay': '500ms',
    bottom: 0,

  })
})

export default function LoginRegForm(props: FormProps) {
  const { handleSubmit, errors, register } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const classes = useStyles(props.visible);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.root}>
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
        <TextField
          id="outlined-email-input-required"
          label="密码"
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          fullWidth
          variant="outlined"
          helperText={errors.password && "密码错误"}
        />
        <Button type="submit" size="large" color="secondary" variant="contained" fullWidth>
          登录
        </Button>
      </form>
    </React.Fragment>
  );
}
