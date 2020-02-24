import { Component, Value ***REMOVED*** from '@malagu/core';
import { UserStore, User, UsernameNotFoundError, ElPolicy, PolicyType, AuthorizeType ***REMOVED*** from '@malagu/security/lib/node';
import { Transactional, OrmContext ***REMOVED*** from '@malagu/typeorm/lib/node';
import { User as UserModel ***REMOVED*** from './entity/user';

@Component({ id: UserStore, rebind: true ***REMOVED***)
export class UserStoreImpl implements UserStore {

  @Value('malagu.security')
  protected readonly options: any;

  @Transactional()
  async load (username: string): Promise<User> {
    const repo = OrmContext.getRepository(UserModel);

    const user = await repo.findOne({ email: username ***REMOVED***

    if (!user) {
      throw new UsernameNotFoundError(`${username***REMOVED***不存在`);
  ***REMOVED***
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
    ***REMOVED*** ]
    ***REMOVED***
***REMOVED***
***REMOVED***
