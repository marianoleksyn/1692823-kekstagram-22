const path = require('path');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/build'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  devServer: {
    overlay: true
  }
};
