import { Component, Autowired } from '@malagu/core';
import { PasswordEncoder } from '@malagu/security/lib/node';
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { User } from '../entity';
import { DouMiBlog } from '../../common/blog-protocol';

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
    }

    const pwd = await this.passwordEncoder.encode(param.password);

    await repo.save({ ...param, password: pwd });
  }
}
