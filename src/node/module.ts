import './blog-server';
import './user.store';
import { autoBindEntities ***REMOVED*** from '@malagu/typeorm';
import * as entities from './entity';
import { autoBind ***REMOVED*** from '@malagu/core';

autoBindEntities(entities);
export default autoBind();
