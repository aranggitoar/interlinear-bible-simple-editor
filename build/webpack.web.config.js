const rules = require('./webpack.rules');
const resolve = require('./webpack.resolve');
const plugins = require('./webpack.plugins');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/web.tsx'),
  output: {
    path: path.resolve(__dirname, 'ibse.benihyangbaik.com/'),
  },
  module: {
    rules,
  },
  plugins: plugins,
  resolve: resolve,
};

