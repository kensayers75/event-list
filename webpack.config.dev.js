var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'src')
      }
    ],
    loaders: [
    // JS Loaders
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /(node_modules|bower_components)/
    },
    // CSS Loaders
    {
      test: /.(scss|css)$/,
      include: path.join(__dirname, 'src'),
        loaders: [
            'style?sourceMap',
            'css?sourceMap&modules&localIdentName=[name]-[local]--[hash:base64:5]',
            'sass?sourceMap&config=sassLoader'
        ]
    },
    // Image Loaders
    {
      test: /\.(jpg|png|svg)$/,
      include: path.join(__dirname, 'src'),
      loader: 'url?limit=25000'
    }
    ]
  },
  // For enzyme testing
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
