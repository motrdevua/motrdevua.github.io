$(function() {
  const topLine = $('.topline');
  const nav = $('.nav');
  const header = $('.header');
  const burger = $('.nav-burger');
  const headerHeight = header.innerHeight();
  const menuItem = $('.menu__item');
  let scrollOffset = $(window).scrollTop();

  $(window).on('scroll', function() {
    scrollOffset = $(this).scrollTop();
    topLine.addClass('topline--red');
    if (scrollOffset === 0) {
      topLine.removeClass('topline--red');
    }

    // Change active menu item on scroll

    $('section').each(function() {
      const sectionId = $(this).attr('id');
      const offset = $(this).offset().top;
      const top = offset - 135;
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

    if (scrollOffset + 80 <= headerHeight) {
      menuItem.removeClass('menu__item--active');
    }
  });

  // Burger menu

  burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('nav-burger--active');
    nav.toggleClass('nav--active');
  });

  // Smooth scroll

  $('[data-scroll]').on('click', function(e) {
    e.preventDefault();
    const elementId = $(this).data('scroll');
    const blockOffset = $(elementId).offset().top;

    menuItem.removeClass('menu__item--active');
    $(this)
      .parent()
      .addClass('menu__item--active');
    burger.toggleClass('nav-burger--active');
    nav.toggleClass('nav--active');

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  // Accordion

  $('.accordion__header').on('click', function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .toggleClass('accordion__item--active')
      .siblings()
      .removeClass('accordion__item--active');
  });

  // Slick slider

  $('.reviews__slider').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Header slider

  $('.header-slider').on('init', function(e, slick) {
    const $items = slick.$dots.find('li');
    $items.addClass('slider-nav__btn');
    $($items[0]).addClass('slider-nav__btn--active');
  });

  $('.header-slider').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slider-nav',
    customPaging(slider, i) {
      return `<span class="slider-nav__num">0${i +
        1} </span><span class="slider-nav__text">${$(
        slider.$slides[i].children[0].firstChild
      ).attr('data-title')}</span>`;
    },
  });

  const dotBtn = $('.slider-nav__btn');

  dotBtn.on('click', function(e) {
    e.preventDefault();
    $(this)
      .addClass('slider-nav__btn--active')
      .siblings()
      .removeClass('slider-nav__btn--active');
  });

  // Learn more button

  $('.slide__button').on('click', function(e) {
    e.preventDefault();
    const elIdent = `#${$(this)
      .parent()
      .parent()
      .data('title')}`;
    $(this).attr('href', elIdent);

    const blockOffset = $(elIdent).offset().top;

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  // map button

  $('.map__link').on('click', function(e) {
    e.preventDefault();
    $('.map__link').toggleClass('map__link--active');
    $('.map-wrapper').toggleClass('map-wrapper--active');
  });

  // Statistics counter

  $(window).scroll(function() {
    let a = 0;
    const parentOffset = $('.stat').offset().top - window.innerHeight;

    if (a === 0 && $(window).scrollTop() > parentOffset) {
      $('.counter__num').each(function() {
        const $this = $(this);
        const countTo = $this.attr('data-count');
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 1000,
            easing: 'linear',
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

  // WOW.js

  new WOW().init();
});

// Google map

function initMap() {
  const element = document.getElementById('map');
  const options = {
    center: {
      lat: 47.871537,
      lng: 35.053622,
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
      content: '<h4>Mogo</h4>',
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
