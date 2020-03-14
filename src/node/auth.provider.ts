import { Component, Autowired, Value ***REMOVED*** from '@malagu/core';
import {
  AuthenticationProvider, Authentication, DEFAULT_AUTHENTICATION_PROVIDER_PRIORITY,
  PasswordEncoder, UserStore, UserChecker, BadCredentialsError ***REMOVED*** from '@malagu/security/lib/node';
import { Context, RequestMatcher ***REMOVED*** from '@malagu/web/lib/node';

@Component({id: AuthenticationProvider, rebind: true***REMOVED***)
export class AuthenticationProviderImpl implements AuthenticationProvider {

  @Value('malagu.security')
  protected readonly options: any;

  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder;

  @Autowired(UserStore)
  protected readonly userStore: UserStore;

  @Autowired(UserChecker)
  protected readonly userChecker: UserChecker;

  @Autowired(RequestMatcher)
  protected readonly requestMatcher: RequestMatcher;

  priority = DEFAULT_AUTHENTICATION_PROVIDER_PRIORITY;

  async authenticate(): Promise<Authentication> {
    const username = this.doGetValue(this.options.usernameKey);
    const password = this.doGetValue(this.options.passwordKey);
    let user;
  ***REMOVED***
      if (!password || !username) {
        throw new BadCredentialsError('Bad credentials');
    ***REMOVED***
      user = await this.userStore.load(username);
      await this.userChecker.check(user);
      if (!await this.passwordEncoder.matches(password, user.password)) {
        throw new BadCredentialsError('Bad credentials');
    ***REMOVED***
      Context.getResponse().statusCode = 200;
      Context.getResponse().body = JSON.stringify({status: 1, data: '登录成功'***REMOVED***
      return {
        principal: user,
        credentials: '',
        policies: user.policies,
        authenticated: true
      ***REMOVED***
  ***REMOVED*** catch (err) {
      Context.getResponse().statusCode = 200;
      Context.getResponse().body = JSON.stringify({status: 0, error: '用户名或密码不正确'***REMOVED***
      return {
        // eslint-disable-next-line no-null/no-null
        principal: null,
        credentials: '',
        policies: [],
        authenticated: false
      ***REMOVED***
  ***REMOVED***
***REMOVED***

  protected doGetValue(key: string): string {
    const request = Context.getRequest();
    if (request.body) {
      return request.body[key];
  ***REMOVED*** else {
      return request.query[key];
  ***REMOVED***
***REMOVED***

  async support(): Promise<boolean> {
    return !!await this.requestMatcher.match(this.options.loginUrl, this.options.loginMethod);
***REMOVED***

***REMOVED***
