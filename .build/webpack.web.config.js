import * as rules from './webpack.rules';
import * as resolve from './webpack.resolve';
import * as rules from './webpack.plugins';
import * as path from 'path'

module.exports = {
  entry: {
    import: path.resolve(__dirname, '..', 'src/web.tsx'),
    dependOn: ['react', 'styled-components'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'public/'),
  },
  target: ['web', 'es5'],
  module: {
    rules,
  },
  plugins: plugins,
  resolve: resolve,
};

