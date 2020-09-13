import { Component, Value } from '@malagu/core';
import { UserService, User, UsernameNotFoundError, ElPolicy, PolicyType, AuthorizeType } from '@malagu/security/lib/node';
import { Transactional, OrmContext } from '@malagu/typeorm/lib/node';
import { User as UserModel } from './entity/user';

@Component({ id: UserService, rebind: true })
export class UserServiceImpl implements UserService<string, User> {

  @Value('malagu.security')
  protected readonly options: any;

  @Transactional()
  async load (username: string): Promise<User> {
    const repo = OrmContext.getRepository(UserModel);

    const user = await repo.findOne({ email: username });

    if (!user) {
      throw new UsernameNotFoundError(`${username}不存在`);
    }
    return {
      username,
      password: user.password,
      accountNonExpired: true,
      accountNonLocked: true,
      credentialsNonExpired: true,
      enabled: true,
      policies: [ <ElPolicy>{
        type: PolicyType.El,
        authorizeType: AuthorizeType.Pre,
        el: 'true'
      } ]
    };
  }
}
