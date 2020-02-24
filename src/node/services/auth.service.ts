import { Component, Autowired ***REMOVED*** from '@malagu/core';
import { PasswordEncoder ***REMOVED*** from '@malagu/security/lib/node';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { User ***REMOVED*** from '../entity';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

export const AuthServiceSymbol = Symbol('AuthService');


@Component(AuthServiceSymbol)
export class AuthService {
  @Autowired(PasswordEncoder)
  protected readonly passwordEncoder: PasswordEncoder;

  @Transactional()
  async registerUser(param: DouMiBlog.RegisterParam) {
    const repo = OrmContext.getRepository(User);

    const users = await repo.find();

    if (users.length >= 1) {
      throw new Error('注册用户数已满，无法注册！');
  ***REMOVED***

    const pwd = await this.passwordEncoder.encode(param.password);

    await repo.save({ ...param, password: pwd ***REMOVED***
***REMOVED***
***REMOVED***
