const menuItem = $('.menu__item');
const header = $('.header');
const headerHeight = header.innerHeight();

// Smooth scroll to anchor
$('.menu__link').on('click', function(e) {
  e.preventDefault();
  const target = $(this).attr('href');
  const blockOffset = $(target).offset().top - 47;

  menuItem.removeClass('menu__item--active');
  $(this)
    .parent()
    .addClass('menu__item--active');
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
  // Change header menu height
  if (scrollOffset >= 79) {
    $('.header').addClass('header--active');
  } else {
    $('.header').removeClass('header--active');
  }
});

// Burger menu
const burger = $('.nav-burger');
const nav = $('.nav');

burger.on('click', function(e) {
  e.preventDefault();
  burger.toggleClass('nav-burger--active');
  nav.toggleClass('nav--active');
});
