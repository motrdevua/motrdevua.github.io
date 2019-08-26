module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src($.config.src.pug.main)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.pug($.dev({ pretty: true })))
      .pipe($.gulp.dest($.config.dist.root))
      .pipe($.browserSync.stream());
  });
}
