import * as React from 'react';
import clsx from 'clsx';
import { Autorpc } from '@malagu/rpc/lib/common/annotation/detached';
import { View } from '@malagu/react/lib/browser';
import { Fab } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { BlogServer } from '../common/blog-protocol';
import './styles/login.less';
import LoginRegForm from './components/login&RegForm';

interface Props {

}

interface State {
  showForm: boolean;
  pageType: 'login' | 'register'
}

@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<Props, State> {

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Props) {
    super(props);

    this.state = {
      showForm: false,
      pageType: (this.props as any).match.params.type
    }
  }
  render() {
    const { showForm, pageType } = this.state;
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
          <LoginRegForm type={pageType} visible={showForm} registerCb={this.BlogServer.registerUser}/>
        </section>
      </div>
    </div>
    )
  }
}
