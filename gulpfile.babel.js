import gulp from 'gulp';
import WEBPACK_DEV_SERVER from './gulps/webpack';

const dirs = {
  src: 'src',
  dest: 'build'
};

gulp.task('default', () => {
  console.log('start default');
  // place code for your default task here
});

gulp.task('dev', [
  WEBPACK_DEV_SERVER
]);
