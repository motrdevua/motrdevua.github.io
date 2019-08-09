import Swiper from 'swiper';

$(document).ready(function() {
  // eslint-disable-next-line no-unused-vars
  const mySwiper = new Swiper('.swiper-container', {
    // autoplay: true,
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
});
