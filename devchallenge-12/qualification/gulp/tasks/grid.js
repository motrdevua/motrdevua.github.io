module.exports = function () {
  $.gulp.task('grid', function (cb) {
    $.smartgrid($.config.src.sass.modules, {
      outputStyle: 'sass',
      columns: 12,
      offset: '30px',
      mobileFirst: false,
      container: {
        maxWidth: '1250px', /* max-width оn very large screen */
        fields: '45px' /* side fields */
      },
      breakPoints: {
        lg: {width: '1100px'},
        md: {width: '960px'},
        sm: {width: '780px', fields: '15px'},
        xs: {width: '560px'},
        s:  {width: '320px'}
      }
    });
    cb();
  });
}
