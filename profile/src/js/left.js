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
});
