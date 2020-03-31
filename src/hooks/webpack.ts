import { HookContext, FRONTEND_TARGET } from '@malagu/cli';
// const FilterWarningsPlugin = require('');

export default (context: HookContext) => {
  const { configurations } = context;
  for (const c of configurations) {
    if (c.name === FRONTEND_TARGET) {
      c.module!.rules = c.module!.rules || [];
      c.module!.rules.push({
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: false,
            }
          }
        ]
      });
    }
  }
};
