import './blog-server';
import './auth.provider';
import './services';
import './configs';
import './user.store';
import './blog.admin.controller';
import './schedule';
import { autoBindEntities ***REMOVED*** from '@malagu/typeorm';
import * as entities from './entity';
import { autoBind ***REMOVED*** from '@malagu/core';

autoBindEntities(entities);
export default autoBind();
