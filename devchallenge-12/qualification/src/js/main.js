//= modules/scrollToAnchor.js
//= modules/loader.js

//MODAL WINDOW

$(function () {
  $('.help').on('click', function () {
    $('.overflow').fadeIn(0, function() {
      $('.modal').fadeIn(0);
    });
  });
  $('.btn-close').on('click', function () {
    $('.overflow').fadeOut(0, function() {
      $('.modal').fadeOut(0);
    });
  });
});

//PROFILE

$(function () {
  $('.profile-nav__btn').on('click', function() {
    var index = '.' + $(this).attr('id');
    var container = '.profile-container';
    var btn = 'profile-nav__btn';
    var tab = 'profile-container__tab';

    $(this).addClass(btn + '--active').siblings().removeClass(btn + '--active');
    if ($(container).find(index).hasClass(tab + '--active')) {
      $(container).find(index).siblings().removeClass(tab + '--active');
    } else {
      $(container).find(index).addClass(tab + '--active');
    }
  });
});

//AID

$(function () {
  $('.aid-nav__btn').on('click', function() {
    var index = '.' + $(this).attr('id');
    var container = '.aid-container';
    var btn = 'aid-nav__btn';
    var tab = 'aid-container__tab';

    $(this).addClass(btn + '--active').siblings().removeClass(btn + '--active');
    $(container).find(index).addClass(tab + '--active').siblings().removeClass(tab + '--active');
  });
});

//PAYMENT BUTTON

$(function () {
  $('.payment__btn').on('click', function() {
    var index = '.' + $(this).attr('id');
    var container = '.payment__wrap--container';
    var btn = 'payment__btn';
    var tab = 'payment__tab';

    $(this).addClass(btn + '--active').siblings().removeClass(btn + '--active');
    $(container).find(index).addClass(tab + '--active').siblings().removeClass(tab + '--active');
  });
});
