import Swiper from 'swiper';

$(document).ready(function() {
  // eslint-disable-next-line no-unused-vars
  const banner = new Swiper('.swiper-banner', {
    autoplay: true,
    delay: 3000,
    speed: 700,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // eslint-disable-next-line no-unused-vars
  const offer = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      prevEl: '.swiper-button-prev.swiper-button-prev-offer',
      nextEl: '.swiper-button-next.swiper-button-next-offer',
    },
  });
});
