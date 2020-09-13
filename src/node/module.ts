import './blog-server';
import './auth.success.handler';
import './services';
import './configs';
import './user.service';
import './blog.admin.controller';
import './error';
// import './schedule';
import { autoBindEntities } from '@malagu/typeorm';
import * as entities from './entity';
import { autoBind } from '@malagu/core';

autoBindEntities(entities);
export default autoBind();
