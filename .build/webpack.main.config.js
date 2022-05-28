import * as rules from './webpack.rules';
import * as resolve from './webpack.resolve';
import * as path from 'path'

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/desktop.tsx'),
  module: {
    rules,
  },
  resolve: resolve,
};

