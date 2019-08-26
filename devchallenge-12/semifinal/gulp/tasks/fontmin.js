module.exports = function () {
  $.gulp.task('fontmin', function () {
    return $.gulp.src($.config.src.fonts.pre)
      .pipe($.gp.fontmin())
      .pipe($.gulp.dest($.config.src.fonts.root));
  });
}
