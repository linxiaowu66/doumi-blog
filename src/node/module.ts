import './blog-server';
import './auth.provider';
import './user.store';
import './blog.admin.controller';
import { autoBindEntities } from '@malagu/typeorm';
import * as entities from './entity';
import { autoBind } from '@malagu/core';

autoBindEntities(entities);
export default autoBind();
