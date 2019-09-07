import 'slick-carousel/slick/slick.min';

$(document).ready(function() {
  $('.fleet-item').each(function() {
    const prev = $(this).find('.navigation-arrow-prev');
    const next = $(this).find('.navigation-arrow-next');

    const slider = $(this).find('.fleet-item__slider');

    const $num = $(this).find('.fleet-item__navigation-counter');
    const $sum = $(this).find('.fleet-item__navigation-sum');

    $num.html('1');

    // slider.on('init', function(event, slick, direction) {
    //   console.log(slick);

    //   $sum.html(slick.$slides.length);
    // });

    slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
      const $activeSlide =
        +$(this)
          .find('.slick-active')
          .attr('data-slick-index') + 1;

      $num.html($activeSlide);
    });

    slider.slick({
      infinite: false,
      speed: 500,
      cssEase: 'linear',
      nextArrow: next,
      prevArrow: prev,
    });

    let numSlick = 0;
    $('.gallery-top').each(function() {
      numSlick += 1;

      $(this)
        .addClass(`slider-${numSlick}`)
        .not('.slick-initialized')
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: `.gallery-thumbs.slider-${numSlick}`,
        });
    });

    numSlick = 0;
    $('.gallery-thumbs').each(function() {
      numSlick += 1;
      $(this)
        .addClass(`slider-${numSlick}`)
        .not('.slick-initialized')
        .slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: `.gallery-top.slider-${numSlick}`,
          arrow: false,
          focusOnSelect: true,
        });
    });
  });
});
