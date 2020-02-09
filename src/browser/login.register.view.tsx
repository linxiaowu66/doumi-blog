import * as React from 'react';
import { Value ***REMOVED*** from '@malagu/core/lib/common/annotation/detached'
import { ENDPOINT ***REMOVED*** from '@malagu/web';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import { Autorpc ***REMOVED*** from '@malagu/rpc/lib/common/annotation/detached';
import { View ***REMOVED*** from '@malagu/react/lib/browser';
import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { BlogServer, DouMiBlog ***REMOVED*** from '../common/blog-protocol';
import './styles/login.register.less';
import LoginRegForm from './components/login&RegForm';

interface Props {

***REMOVED***

interface State {
  showForm: boolean;
  pageType: 'login' | 'register',
  reqSuccess: boolean,
  isOpenSnackbar: boolean,
  snackbarMsg: string,
***REMOVED***

@View('/blog/auth/:type')
export class LoginOrRegister extends React.Component<Props, State> {

  @Value(ENDPOINT)
  protected readonly endpoint: string;

  @Autorpc(BlogServer)
  protected BlogServer!: BlogServer;

  constructor(props: Props) {
    super(props);

    this.state = {
      showForm: false,
      pageType: (this.props as any).match.params.type,
      reqSuccess: false,
      isOpenSnackbar: false,
      snackbarMsg: '',
  ***REMOVED***
***REMOVED***
  login = async (data: DouMiBlog.LoginParam) => {
  ***REMOVED***
      const res = await axios.post(`${this.endpoint ? this.endpoint : ''***REMOVED***/api/login`, data);

      if (res.data.status && res.data.data === '登录成功') {
        this.setState({
          reqSuccess: true
      ***REMOVED***)
        setTimeout(() => {
          location.hash = '/blog/admin/index'
      ***REMOVED***, 2000)
    ***REMOVED*** else if (!res.data.status){
        this.setState({
          isOpenSnackbar: true,
          snackbarMsg: res.data.error
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED*** catch (err) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '登录失败，请联系管理员'
    ***REMOVED***)
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
          this.setState({
            reqSuccess: false,
        ***REMOVED***)
      ***REMOVED***, 1500)
        setTimeout(() => {
          location.hash = '/blog/auth/login';
          this.setState({
            showForm: true,
            pageType: 'login',
        ***REMOVED***)
      ***REMOVED***, 4000)
    ***REMOVED***
  ***REMOVED*** catch (err) {
      this.setState({
        isOpenSnackbar: true,
        snackbarMsg: '注册失败，请联系管理员'
    ***REMOVED***)
  ***REMOVED***
***REMOVED***
  render() {
    const { showForm, pageType, reqSuccess, isOpenSnackbar, snackbarMsg ***REMOVED*** = this.state;
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
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' ***REMOVED******REMOVED***
          key={'top,right'***REMOVED***
          open={isOpenSnackbar***REMOVED***
          onClose={() => this.setState({ isOpenSnackbar: false ***REMOVED***)***REMOVED***
          message={snackbarMsg***REMOVED***
        />
      </div>
    </div>
    )
***REMOVED***
***REMOVED***
