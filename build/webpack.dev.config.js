const rules = require('./webpack.rules');
const resolve = require('./webpack.resolve');
const plugins = require('./webpack.plugins');

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: resolve,
};
