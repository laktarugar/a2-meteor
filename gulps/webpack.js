/**
 * Created by alexanderklimenko on 9/22/15.
 */
import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConf from "./../webpack.config.js";

const webpackDevConf = Object.assign({}, webpackConf, {
  devtool: 'sourcemap',
  debug: true
});

const outputConf = {
  colors: true
};

gulp.task('webpack:build', createWebpackTask(webpackConf));
gulp.task('webpack:build-dev', createWebpackTask(webpackDevConf));

const WEBPACK_DEV_SERVER = "webpack-dev-server";
export default WEBPACK_DEV_SERVER;
gulp.task(WEBPACK_DEV_SERVER, function() {
  // Start a webpack-dev-server
  var compiler = webpack({
    // configuration
  });

  new WebpackDevServer(compiler, {
    // server and middleware options
  }).listen(8080, "localhost", function(err) {
    console.log('test', err);
    if(err) throw new gulpUtil.PluginError("webpack-dev-server", err);
    // Server listening
    gulpUtil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});


function createWebpackTask(conf) {
  return (callback) => {
    webpack( conf, (err, stats) =>  {
      if(err) throw new gulpUtil.PluginError("webpack", err);
      gulpUtil.log("[webpack]", stats.toString(outputConf));
      callback();
    });
  }
}
