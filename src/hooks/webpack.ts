***REMOVED***
// const FilterWarningsPlugin = require('');

export default (context: HookContext) => {
  const { configurations ***REMOVED*** = context;
  for (const c of configurations) {
    if (c.name === FRONTEND_TARGET) {
      c.module.rules = c.module.rules || [];
      c.module.rules.push({
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
          ***REMOVED***
        ***REMOVED***,
          {
            loader: 'less-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: false,
          ***REMOVED***
        ***REMOVED***
        ]
      ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
