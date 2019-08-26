module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: {
        baseDir: $.config.dist.root,
      },
      // browser: "FirefoxDeveloperEdition"
    });
  });
}
