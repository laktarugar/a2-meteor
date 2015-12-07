import path from 'path';
import webpack from 'webpack';
const host = 'localhost';
const port = 3001;

console.log(path.join(__dirname, 'node_modules/angular2/es6/dev'));

export default {
  devServerPort: port,
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    './client/init.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },

  plugins: [
    "angular2-annotations",
    "type-assertion",
    new webpack.HotModuleReplacementPlugin()
  ],

  //resolve: {
  //  alias: {
  //    'angular2': './angular2/es6/dev'
  //  }
  //},

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          optional: ['runtime', "es7.decorators"],
          stage: 0
        }
      }
    ]
  }
}
