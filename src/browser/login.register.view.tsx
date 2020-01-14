import * as React from 'react';
import clsx from 'clsx';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { Fab ***REMOVED*** from '@material-ui/core';
import { ArrowForward ***REMOVED*** from '@material-ui/icons';
import { BlogServer ***REMOVED*** from '../common/blog-protocol';
import './styles/login.less';
import LoginRegForm from './components/login&RegForm';

interface Props {

***REMOVED***

interface State {
  showForm: boolean;
  pageType: 'login' | 'register'
***REMOVED***

@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<Props, State> {

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Props) {
    super(props);

    this.state = {
      showForm: false,
      pageType: (this.props as any).match.params.type
  ***REMOVED***
***REMOVED***
  render() {
    const { showForm, pageType ***REMOVED*** = this.state;
    return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <section className='login-form'>
          <div className={clsx({
            'welcome-login': true,
            'hidden': showForm
        ***REMOVED***)***REMOVED***>
            <p>We</p>
            <p>LOVE</p>
            <p>LIFE</p>
          </div>
          <Fab color="secondary" className={clsx({
            'login-forward': true,
            'hidden': showForm
         ***REMOVED***)***REMOVED*** onClick={() => this.setState({ showForm: true ***REMOVED***)***REMOVED***>
            <ArrowForward />
          </Fab>
          <LoginRegForm type={pageType***REMOVED*** visible={showForm***REMOVED*** registerCb={this.BlogServer.registerUser***REMOVED***/>
        </section>
      </div>
    </div>
    )
***REMOVED***
***REMOVED***
