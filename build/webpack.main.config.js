const rules = require('./webpack.rules');
const resolve = require('./webpack.resolve');
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/desktop.tsx'),
  module: {
    rules,
  },
  resolve: resolve,
};

