module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src('./src/fonts/*.{svg,eot,ttf,woff,woff2}')
    .pipe($.gulp.dest('./dist/fonts'));
  });
}
