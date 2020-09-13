import { Component } from '@malagu/core';
import { AuthenticationSuccessHandler, Authentication } from '@malagu/security';
import { Context } from '@malagu/web/lib/node';

@Component({ id: AuthenticationSuccessHandler, rebind: true })
export class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {

  async onAuthenticationSuccess(authentication: Authentication): Promise<void> {
    Context.getResponse().statusCode = 200;
    Context.getResponse().body = JSON.stringify({status: 1, data: '登录成功'});
  }


}
