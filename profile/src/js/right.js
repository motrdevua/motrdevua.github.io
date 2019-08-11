$(function() {
  const panel = $('.panel');
  panel.on('click', function() {
    $(this)
      .toggleClass('panel--active')
      .siblings()
      .removeClass('panel--active');
  });
});
