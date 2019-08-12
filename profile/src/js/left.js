$(document).ready(function() {
  const element = $('.profile__communication');

  element.on('click', function() {
    $(this).toggleClass('profile__communication--active');
  });

  $(document).on('click', function(e) {
    if (element.has(e.target).length === 0) {
      element.removeClass('profile__communication--active');
    }
  });

  $('.toggle-box .icon').on('click', function() {
    if ($(this).hasClass('icon--lightbulb-off')) {
      $(this).fadeOut(100);
      $(this)
        .removeClass('icon--lightbulb-off')
        .addClass('icon--lightbulb-on');
      $('.icon--lightbulb-on use').attr(
        'xlink:href',
        'img/spriteSvg.svg#sprite-lightbulb-on'
      );
      $(this).fadeIn(300);
    } else {
      $(this).fadeOut(100);
      $(this)
        .removeClass('icon--lightbulb-on')
        .addClass('icon--lightbulb-off');
      $('.icon--lightbulb-off use').attr(
        'xlink:href',
        'img/spriteSvg.svg#sprite-lightbulb-off'
      );
      $(this).fadeIn(300);
    }
  });
});
