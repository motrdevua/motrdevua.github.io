module.exports = function () {
  $.gulp.task('svg', function () {
    return $.gulp.src($.config.src.img.svg)
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true,
        },
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true},
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: '../spriteSvg.svg',
            render: {
              sass: {
                dest: '../../../src/sass/modules/_spriteSvg.sass',
                template: './spriteSvg.template.sass',
              },
            },
          },
        },
      }))
      .pipe($.gulp.dest($.config.dist.img));
  });
}
