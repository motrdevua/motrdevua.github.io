module.exports = function () {
  $.gulp.task('img', function () {
    return $.gulp.src($.config.src.img.allImg)
      .pipe($.gp.cache($.gp.imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{removeViewBox: false}],
        use: [$.gp.pngquant()],
      })))
      .pipe($.gulp.dest($.config.dist.img));
  });
}
