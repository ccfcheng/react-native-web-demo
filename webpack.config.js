const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true,
    },
  }),
];
const shared = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
  new ExtractTextPlugin('[name].css'),
];
const plugins = NODE_ENV === 'production' ? shared.concat(prodPlugins) : shared;

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },

  plugins,

  module: {
    preLoaders: [
      { test: /\.json$/, loader: 'json' },
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?minimize!postcss-loader'),
      },
    ],
  },
  postcss: () => [autoprefixer],
};
