import * as rules from './webpack.rules';
import * as resolve from './webpack.resolve';
import * as rules from './webpack.plugins';

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: resolve,
};
