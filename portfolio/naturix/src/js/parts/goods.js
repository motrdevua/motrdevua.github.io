/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
// ==================== GOODS =======================

$(function () {
  $('.goods__tab').on('click', function () {
    if ($(this).attr('class') !== 'goods__tab--active') {
      $(this)
        .toggleClass('goods__tab--active')
        .siblings()
        .removeClass('goods__tab--active');
    }
  });

  $('.goods__slider').slick({
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    appendDots: '.goods-pagination',
    dotsClass: 'pagination__list',
    customPaging: function (slider, i) {
      return $('<div class="pagination__dot"></div>');
    },
    responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
