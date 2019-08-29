// ==================== RANDOM SLIDER =======================

$(function() {
  $('.random-slider--new').slick({
    initialSlide: 1,
    infinite: true,
    prevArrow: $('.new-prev'),
    nextArrow: $('.new-next'),
  });
  $('.random-slider--pop').slick({
    initialSlide: 2,
    infinite: true,
    prevArrow: $('.pop-prev'),
    nextArrow: $('.pop-next'),
  });
  $('.random-slider--random').slick({
    initialSlide: 1,
    infinite: true,
    prevArrow: $('.random-prev'),
    nextArrow: $('.random-next'),
  });
});
