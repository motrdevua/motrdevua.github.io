$(function() {
  const title = $('.panel__title');
  const panelContainer = $('.panel__container');
  title.on('click', function() {
    $(this)
      .parent()
      .toggleClass('panel--active')
      .siblings()
      .removeClass('panel--active');
    $(this)
      .addClass('panel__title--active')
      .parent()
      .siblings()
      .children()
      .removeClass('panel__title--active');
  });
  panelContainer.on('click', function() {
    if (
      $(this)
        .parent()
        .hasClass('panel--active')
    ) {
      $(this)
        .parent()
        .removeClass('panel--active');
      $(this)
        .prev()
        .removeClass('panel__title--active');
    }
  });
});
