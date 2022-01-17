var rules = require('./webpack.rules');
var plugins = require('./webpack.plugins');
var path = require('path');
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  entry: './src/web',
  output: {
    path: path.resolve(__dirname, 'ibse.benihyangbaik.com/'),
  },
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    fallback: { 'assert': false,
                'stream': false },
  },
};

