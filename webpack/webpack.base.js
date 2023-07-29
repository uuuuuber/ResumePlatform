const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  externals: {
    'electron': 'require("electron")'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@assets': path.join(__dirname, '../', 'assets/'),
    },
    fallback: {
      //将告诉 webpack 在找不到原生的 path 模块时使用 path-browserify 作为 polyfill
      "path": require.resolve("path-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin()],
};
