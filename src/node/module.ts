import './blog-server';
import './auth.provider';
import './services';
import './configs';
import './user.store';
import './blog.admin.controller';
// import './schedule';
import { autoBindEntities } from '@malagu/typeorm';
import * as entities from './entity';
import { autoBind } from '@malagu/core';

autoBindEntities(entities);
export default autoBind();
