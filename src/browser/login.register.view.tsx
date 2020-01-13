import * as React from 'react';
import { Home ***REMOVED*** from '@material-ui/icons';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
// import { Field, Form, FormSpy ***REMOVED*** from 'react-final-form';

import './styles/login.less';

interface Props {

***REMOVED***

interface State {

***REMOVED***
@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<State, Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showForm: false
  ***REMOVED***
***REMOVED***
  handleSubmit = () => {

***REMOVED***
  render() {
    return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <header className='login-header'>
          <h1>豆米的博客 <span>有趣、五味杂陈的前端生活博客</span></h1>
          <div className='login-links'>
            <Home className='icon' />
          </div>
        </header>
        <section className='login-form'>
          <div>
            <p>We</p>
            <p>LOVE</p>
            <p>LIFE</p>
          </div>

        </section>
      </div>
    </div>
    )
***REMOVED***
***REMOVED***
