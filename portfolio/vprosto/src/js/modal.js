/**
 * Modal Window
 */

$('.button--request').on('click', function() {
  $('.modal').addClass('modal--active');
});

$('.modal__button--close').on('click', function() {
  $('.modal').removeClass('modal--active');
});

$('.modal__button--send').on('click', function() {
  $('.modal__message').addClass('modal__message--active');
  setTimeout(() => {
    $('.modal__message').removeClass('modal__message--active');
  }, 1000);
  setTimeout(() => {
    $('.modal__input').each(function() {
      $(this).val('');
    });
    $('.modal').removeClass('modal--active');
  }, 2000);
});

$('.modal').on('click', function(e) {
  e.preventDefault();
  if (
    !$('.button--request').is(e.target) &&
    !$('.modal__inner').is(e.target) &&
    $('.modal__inner').has(e.target).length === 0
  ) {
    $('.modal').removeClass('modal--active');
  }
});
