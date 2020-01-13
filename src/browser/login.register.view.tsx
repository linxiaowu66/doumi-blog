import * as React from 'react';
import clsx from 'clsx';
import { View } from '@malagu/react/lib/browser';
import { Fab } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

import './styles/login.less';
import LoginRegForm from './components/login&RegForm';

interface Props {

}

interface State {
  showForm: boolean;
}
@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showForm: false
    }
  }
  handleSubmit = () => {

  }
  render() {
    const { showForm } = this.state;
    return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <section className='login-form'>
          <div className={clsx({
            'welcome-login': true,
            'hidden': showForm
          })}>
            <p>We</p>
            <p>LOVE</p>
            <p>LIFE</p>
          </div>
          <Fab color="secondary" className={clsx({
            'login-forward': true,
            'hidden': showForm
           })} onClick={() => this.setState({ showForm: true })}>
            <ArrowForward />
          </Fab>
          <LoginRegForm type="login" visible={showForm} />
        </section>
      </div>
    </div>
    )
  }
}
