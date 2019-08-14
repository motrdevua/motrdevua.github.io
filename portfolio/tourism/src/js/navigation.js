const menuItem = $('.menu__item');
const header = $('.header');
const headerHeight = header.innerHeight();

$('[data-scroll]').on('click', function(e) {
  e.preventDefault();
  const elementId = $(this).data('scroll');
  const blockOffset = $(elementId).offset().top - 47;

  menuItem.removeClass('menu__item--active');
  $(this)
    .parent()
    .addClass('menu__item--active');
  // burger.toggleClass('nav-burger--active');
  // nav.toggleClass('nav--active');

  $('html, body').animate(
    {
      scrollTop: blockOffset,
    },
    700
  );
});

$(window).on('scroll', function() {
  const scrollOffset = $(this).scrollTop();

  // Change active menu item on scroll

  $('section').each(function() {
    const sectionId = $(this).attr('id');
    const offset = $(this).offset().top;
    const top = offset - 48;
    const bottom = scrollOffset + $(this).height();

    if (sectionId) {
      if (scrollOffset > top && scrollOffset < bottom) {
        menuItem.removeClass('menu__item--active');
        $("[data-scroll='#".concat(sectionId, "']"))
          .parent()
          .addClass('menu__item--active');
      }
    }
  });

  if (scrollOffset >= 79) {
    $('.header').addClass('header--active');
  } else {
    $('.header').removeClass('header--active');
  }
});
