module.exports = function () {
  $.gulp.task('clean', (cb) => {
    $.rimraf($.config.dist.root, cb);
    $.rimraf('./src/img/spritePng.png', cb);
    $.rimraf('./src/img/spriteSvg.svg', cb);
    $.rimraf('./src/sass/modules/_spritePng.sass', cb);
    $.rimraf('./src/sass/modules/_spriteSvg.sass', cb);
    $.rimraf('./src/sass/modules/smart-grid.sass', cb);
    $.rimraf('./src/fonts/*.css', cb);
  });
}
