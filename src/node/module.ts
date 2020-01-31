import './blog-server';
import './auth.provider';
import './services';
import './user.store';
import './blog.admin.controller';
import { autoBindEntities ***REMOVED*** from '@malagu/typeorm';
import * as entities from './entity';
import { autoBind ***REMOVED*** from '@malagu/core';

autoBindEntities(entities);
export default autoBind();
