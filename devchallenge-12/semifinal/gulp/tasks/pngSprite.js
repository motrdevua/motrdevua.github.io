module.exports = function () {
  $.gulp.task('png', function () {
    var spriteData =
      $.gulp.src($.config.src.img.png)
        .pipe($.gp.spritesmith({
          imgName: 'spritePng.png',
          cssName: '_spritePng.sass',
          cssFormat: 'sass',
          algorithm: 'binary-tree',
          padding: 4,
          cssTemplate: 'spritePng.template.mustache',
          cssVarMap: function (sprite) {
            sprite.name = 's-' + sprite.name;
          },
        }));
    spriteData.img.pipe($.gulp.dest($.config.src.img.root));
    return spriteData.css.pipe($.gulp.dest($.config.src.sass.modules));
  });
}
