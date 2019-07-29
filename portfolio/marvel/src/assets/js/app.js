$(function() {
  // Navigation

  const nav = $('.nav');
  const header = $('.header');
  const headerHeight = header.innerHeight();
  const menu = $('.nav__menu');
  const menuItem = $('.nav__item');
  const burger = $('.nav-burger');
  let scrollOffset = $(window).scrollTop();
  const contact = $('.slider__button');

  if (scrollOffset >= headerHeight) {
    nav.addClass('nav--fixed');
  }

  $(window).on('scroll', function() {
    scrollOffset = $(this).scrollTop();

    // Fixed menu

    if (scrollOffset >= headerHeight - 79) {
      nav.addClass('nav--fixed');
      $('.about').css('margin-top', '79px');
    } else {
      nav.removeClass('nav--fixed');
      $('.about').css('margin-top', '0px');
      $('[data-scroll="#home"]')
        .parent()
        .addClass('nav__item--active')
        .siblings()
        .removeClass('nav__item--active');
    }

    // Change active menu item on scroll

    $('section').each(function() {
      const sectionId = $(this).attr('id');
      const offset = $(this).offset().top;
      const bottom = scrollOffset + $(this).height();

      if (sectionId) {
        if (scrollOffset > offset - 80 && scrollOffset < bottom) {
          menuItem.removeClass('nav__item--active');
          $("[data-scroll='#".concat(sectionId, "']"))
            .parent()
            .addClass('nav__item--active');
        }
      }
    });
  });

  // Smooth scroll

  $('[data-scroll]').on('click', function(e) {
    e.preventDefault();
    const elementId = $(this).data('scroll');
    const blockOffset = $(elementId).offset().top;

    menu.toggleClass('nav__menu--active');
    burger.toggleClass('nav-burger--active');
    menuItem.removeClass('nav__item--active');
    $(this)
      .parent()
      .addClass('nav__item--active');

    $('html, body').animate(
      {
        scrollTop: blockOffset - 78,
      },
      1000
    );
  });

  // Burger menu

  burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('nav-burger--active');
    nav.toggleClass('nav--active');
    menu.toggleClass('nav__menu--active');
  });

  // Statistics counter

  $(window).on('scroll', function() {
    let a = 0;
    const parentOffset =
      $('.stats__counters').offset().top - window.innerHeight + 100;

    if (a === 0 && $(window).scrollTop() > parentOffset) {
      $('.stats__count').each(function() {
        const $this = $(this);
        const countTo = $this.attr('data-count');
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 500,
            easing: 'swing',
            step() {
              $this.text(Math.floor(this.countNum));
            },
            complete() {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  });

  // Filter

  const filterButton = $('.filter__button');

  filterButton.on('click', function() {
    const $this = $(this);
    const filterValue = $this.attr('data-filter');

    $this
      .addClass('filter__button--active')
      .siblings()
      .removeClass('filter__button--active');

    if (filterValue && filterValue !== 'all') {
      $('.work__cards').fadeTo(100, 0.1);
      $('.work__card')
        .not(`[data-filter='${filterValue}']`)
        .fadeOut(500);
      setTimeout(function() {
        $(`[data-filter='${filterValue}']`).fadeIn(500);
        $('.work__cards').fadeTo(100, 1);
      }, 500);
    } else {
      $('.work__card').fadeIn(500);
    }
  });

  /* ======================= Map ========================= */

  // map button

  $('.map__button').on('click', function(e) {
    e.preventDefault();
    $('.map__button').toggleClass('map__button--active');
    $('.map__wrapper').toggleClass('map__wrapper--active');
  });

  /* =================== WOW.js ==================== */

  new WOW().init();

  /* =================== Swiper ==================== */

  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    initialSlide: 1,
    effect: 'slide',
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

// Google map

function initMap() {
  const element = document.getElementById('map');

  const options = {
    center: {
      lat: 50.422302,
      lng: 30.603786,
    },
    zoom: 15,
  };

  const myMap = new google.maps.Map(element, options);

  function addMarker(coordinates) {
    const marker = new google.maps.Marker({
      position: coordinates,
      map: myMap,
    });
    const info = new google.maps.InfoWindow({
      content: '<h4>Marvel</h4>',
    });
    marker.addListener('mouseover', function() {
      info.open(myMap, marker);
    });
    marker.addListener('mouseout', function() {
      info.close(myMap, marker);
    });
  }

  addMarker(options.center);
}
