import * as React from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import { Fab ***REMOVED*** from '@material-ui/core';
import { ArrowForward, Done ***REMOVED*** from '@material-ui/icons';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import './styles/login.register.less';
import LoginRegForm from './components/login&RegForm';

interface Props {

***REMOVED***

interface State {
  showForm: boolean;
  pageType: 'login' | 'register',
  reqSuccess: boolean
***REMOVED***

@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<Props, State> {

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Props) {
    super(props);

    this.state = {
      showForm: false,
      pageType: (this.props as any).match.params.type,
      reqSuccess: false,
  ***REMOVED***
***REMOVED***
  login = async (data: DouMiBlog.LoginParam) => {
  ***REMOVED***
      const res = await axios.post('/api/login', data);

      if (res.data.status && res.data.data === '登录成功') {
        this.setState({
          reqSuccess: true
      ***REMOVED***)
        setTimeout(() => {
          location.hash = '/blog/admin/index'
      ***REMOVED***, 2000)
    ***REMOVED***
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***

***REMOVED***
  registerUser = async (data: DouMiBlog.RegisterParam) => {
  ***REMOVED***
      const result = await this.BlogServer.registerUser(data)

      if (result === '注册成功') {
        this.setState({
          reqSuccess: true
      ***REMOVED***)
        setTimeout(() => {
          location.hash = '/blog/auth/login'
      ***REMOVED***, 2000)
    ***REMOVED***
  ***REMOVED*** catch (err) {
      console.log(err)
  ***REMOVED***
***REMOVED***
  render() {
    const { showForm, pageType, reqSuccess ***REMOVED*** = this.state;
    return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <section className={clsx({
          'login-form': true,
          'animation': reqSuccess
      ***REMOVED***)***REMOVED***>
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
          <LoginRegForm
            type={pageType***REMOVED***
            visible={showForm***REMOVED***
            registerCb={this.registerUser***REMOVED***
            loginCb={this.login***REMOVED***
            actionSuccess={reqSuccess***REMOVED*** />
          <div className={clsx({
            "success-tip": true,
            "active": reqSuccess
        ***REMOVED***)***REMOVED***><span>{pageType === 'register' ? '注册成功' : '登录成功'***REMOVED***</span><Done /></div>
        </section>
      </div>
    </div>
    )
***REMOVED***
***REMOVED***
