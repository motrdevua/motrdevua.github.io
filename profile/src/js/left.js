$(document).ready(function() {
  const element = $('.about__contacts');

  element.on('click', function() {
    $(this).toggleClass('about__contacts--active');
  });

  $(document).on('click', function(e) {
    if (element.has(e.target).length === 0) {
      element.removeClass('about__contacts--active');
    }
  });
});
