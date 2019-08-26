module.exports = function () {
  $.gulp.task('js', function () {
    return $.gulp.src($.config.src.js.main)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.dev($.gp.sourcemaps.init()))
      .pipe($.gp.rigger())
      .pipe($.prod($.gp.uglify()))
      .pipe($.dev($.gp.sourcemaps.write()))
      .pipe($.gp.rename({
        suffix: ".min"
      }))
      .pipe($.gulp.dest($.config.dist.js))
      .pipe($.browserSync.stream());
  });
}
