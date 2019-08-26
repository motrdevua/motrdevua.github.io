module.exports = function () {
  $.gulp.task('fontgen', function () {
    return $.gulp.src($.config.src.fonts.pre)
    .pipe($.gp.fontgen({
      dest: $.config.src.fonts.root
    }));
  });
}
