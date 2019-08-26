module.exports = function () {
  $.gulp.task('woff2', function(){
    return $.gulp.src($.config.src.fonts.pre)
      .pipe($.gp.ttf2woff2())
      .pipe($.gulp.dest($.config.src.fonts.root));
  });
}
