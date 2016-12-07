const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.join(__dirname, 'app.js'),
  output: {
    path: path.join(__dirname, '/'),
    filename: '[name]-[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      files: {
        css: ['style.css']
      },
      title: 'Corilla powered React UI components | Corilla',
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'favicon.png'),
      inject: 'body'
    }),
    new ExtractTextPlugin('main-[contenthash].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  sassLoader: {
    precision: 8
  },
  postcss: [
    autoprefixer({
      browsers: [
        'Chrome >= 20',
        'Explorer >= 9',
        'Edge >= 1'
      ]
    })
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss!sass')
      },
      { test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
