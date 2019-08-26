module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src($.config.src.sass.main)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.dev($.gp.sourcemaps.init()))
      .pipe($.gp.sass().on('error', $.gp.sass.logError))
      .pipe($.gp.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
      }))
      .pipe($.gcmq())
      .pipe($.gp.csscomb())
      .pipe($.prod($.gp.csso()))
      .pipe($.dev($.gp.sourcemaps.write()))
      .pipe($.gp.rename({
        suffix: ".min"
      }))
      .pipe($.gulp.dest($.config.dist.css))
      .pipe($.browserSync.stream());
  });
}
