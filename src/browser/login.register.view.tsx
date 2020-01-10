import * as React from 'react';
import { Home } from '@material-ui/icons';
import { View } from '@malagu/react/lib/browser';

import './styles/login.less';

interface Props {

}

interface State {

}
@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<State, Props> {
  render() {
    return (
    <div className='login-container'>
      <div className='cont_principal'>
        <header className='login-header'>
          <h1>豆米的博客 <span>有趣、五味杂陈的前端生活博客</span></h1>
          <div className='login-links'>
            <Home className='icon' />
          </div>
        </header>
        <section id='login-form'>
          <div className='cont_join'>
            <div className='cont_letras'>
              <p>We</p>
              <p>LOVE</p>
              <p>LIFE</p>
            </div>

            <div className='cont_form_join'>
              <h2>JOIN</h2>

              <p>邮箱:</p>
              <input type='text' className='input_text' name='email' id='email'/>

              <p>密码:</p>
              <input type='password' className='input_text' name='password' id='password' />

              <div className='login_error'>
                <h2>邮箱或密码不正确</h2>
              </div>
            </div>

            <div className='cont_join_form_finish'>
              <h2>登录成功 <i className='material-icons'>&#xE5CA;</i></h2>
            </div>

            <div className='cont_btn_join' id='login_btn'>
              <a href='#'>登录</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    )
  }
}
