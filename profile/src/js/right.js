$(function() {
  const title = $('.section__title');
  const sectionContainer = $('.section__container');
  title.on('click', function() {
    $(this)
      .parent()
      .toggleClass('section--active')
      .siblings()
      .removeClass('section--active');
    $(this)
      .addClass('section__title--active')
      .parent()
      .siblings()
      .children()
      .removeClass('section__title--active');
  });
  sectionContainer.on('click', function() {
    if (
      $(this)
        .parent()
        .hasClass('section--active')
    ) {
      $(this)
        .parent()
        .removeClass('section--active');
      $(this)
        .prev()
        .removeClass('section__title--active');
    }
  });
});
