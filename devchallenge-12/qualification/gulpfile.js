global.$ = {
  gulp: require('gulp'),
  config: require('./package.json').config,
  gp: require('gulp-load-plugins')(),
  rimraf: require('rimraf'),
  svgSprite: require('gulp-svg-sprite'),
  smartgrid: require('smart-grid'),
  gcmq: require('gulp-group-css-media-queries'),
  browserSync: require('browser-sync').create(),
  path: {
    tasks: require('./gulp/config'),
  },
  dev: require('gulp-environments').development,
  prod: require('gulp-environments').production
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean', 'fonts',
  $.gulp.parallel('grid', 'fonts', 'pug', 'sass', 'js', 'img'),
  $.gulp.parallel('watch', 'serve')
));
