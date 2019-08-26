module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch($.config.src.pug.all, $.gulp.series('pug'));
    $.gulp.watch($.config.src.sass.all, $.gulp.series('sass'));
    $.gulp.watch($.config.src.js.all, $.gulp.series('js'));
    $.gulp.watch('src/img/png/*.*', $.gulp.series('png'));
    $.gulp.watch('src/img/svg/*.*', $.gulp.series('svg'));
    $.gulp.watch('src/img/*.*', $.gulp.series('img'));
  });
}
