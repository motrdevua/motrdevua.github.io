// ==================== TESTIMOTIALS SLIDER =======================

$(function() {
  $('.testimonials__slider').slick({
    infinite: true,
    speed: 500,
    cssEase: 'ease-in-out',
    slidesToShow: 2,
    prevArrow: $('.test-prev'),
    nextArrow: $('.test-next'),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        breakpoint: 560,
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
