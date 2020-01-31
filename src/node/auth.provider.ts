import { Component, Autowired, Value } from '@malagu/core';
import { AuthenticationProvider, Authentication, DEFAULT_AUTHENTICATION_PROVIDER__PRIORITY, PasswordEncoder, UserStore, UserChecker, BadCredentialsError } from '@malagu/security/lib/node';
import { Context, RequestMatcher } from '@malagu/web/lib/node';

@Component({id: AuthenticationProvider, rebind: true})
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
    protected readonly requestMatcher: RequestMatcher

    priority = DEFAULT_AUTHENTICATION_PROVIDER__PRIORITY;

    async authenticate(): Promise<Authentication> {
        const username = this.doGetValue(this.options.usernameKey);
        const password = this.doGetValue(this.options.passwordKey);
        let user
        try {
          if (!password || !username) {
              throw new BadCredentialsError('Bad credentials');
          }
          user = await this.userStore.load(username);
          await this.userChecker.check(user);
          if (!await this.passwordEncoder.matches(password, user.password)) {
              throw new BadCredentialsError('Bad credentials');
          }
          Context.getResponse().statusCode = 200;
          Context.getResponse().body = JSON.stringify({status: 1, data: '登录成功'});
          return {
            principal: user,
            credentials: '',
            policies: user.policies,
            authenticated: true
          };
        } catch (err) {
          Context.getResponse().statusCode = 200;
          Context.getResponse().body = JSON.stringify({status: 0, error: '用户名或密码不正确'});
          return {
            principal: null,
            credentials: '',
            policies: [],
            authenticated: false
          };
        }
    }

    protected doGetValue(key: string): string {
        const request = Context.getRequest();
        if (request.body) {
            return request.body[key];
        } else {
            return request.query[key];
        }
    }

    async support(): Promise<boolean> {
       return !!await this.requestMatcher.match(this.options.loginUrl, this.options.loginMethod);
    }

}
