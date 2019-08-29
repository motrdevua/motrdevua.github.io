$(function() {
  $('.menu__item').on('click', function() {
    if ($(this).attr('class') !== 'menu__item--active') {
      $(this)
        .toggleClass('menu__item--active')
        .siblings()
        .removeClass('menu__item--active');
    }
  });
});
