/**
 * Burger
 */

$('.burger').on('click', () => {
  $('.burger').toggleClass('burger--active');
  $('.menu').toggleClass('menu--active');
});

$('.menu__item').on('click', function() {
  $('.menu').toggleClass('menu--active');
  $('.burger').toggleClass('burger--active');
});
