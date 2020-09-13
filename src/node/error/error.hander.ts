import { ErrorHandler, Context } from '@malagu/web/lib/node';
import { Component } from '@malagu/core';
import { AUTHENTICATION_ERROR_HANDlER_PRIORITY, AuthenticationError } from '@malagu/security';

@Component(ErrorHandler)
export class AuthenticationErrorHandler implements ErrorHandler {

  readonly priority: number = AUTHENTICATION_ERROR_HANDlER_PRIORITY + 1;

  canHandle(ctx: Context, err: Error): Promise<boolean> {
    return Promise.resolve(err instanceof AuthenticationError);
  }

  async handle(ctx: Context, err: AuthenticationError): Promise<void> {
    Context.getResponse().statusCode = 200;
    Context.getResponse().body = JSON.stringify({status: 0, error: '用户名或密码不正确'});
  }
}
