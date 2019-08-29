// ==================== HEADER SLIDER =======================

$(function() {
  $('.underlay-slider').slick({
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'ease-in-out',
    slidesToShow: 1,
    adaptiveHeight: true,
    initialSlide: 1,
    prevArrow: $('.underlay__btn--prev'),
    nextArrow: $('.underlay__btn--next'),
  });

  var $btn = $('.underlay__btn');
  var $num = $('.underlay-slider-controls__num');

  $btn.on('click', function() {
    var $activeSlide = +$('.slick-active').attr('data-slick-index') + 1;
    $num.html('0' + $activeSlide);
  });

  $('.underlay-slider').on('afterChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var $activeSlide = +$('.slick-active').attr('data-slick-index') + 1;
    $num.html('0' + $activeSlide);
  });
});
