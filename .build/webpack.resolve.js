import * as TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
  plugins: [new TsconfigPathsPlugin()],
  extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  fallback: { 'assert': false,
              'stream': false },
}
