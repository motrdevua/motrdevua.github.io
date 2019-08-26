// ------------ Header menu ------------

// --- Menu Line ----

$(function(){
  var $menu = $('.head-menu'),
      $line = $('<div>').appendTo($menu),
      $activeItem,
      $lineWidth,
      $itemPosition;

  function refresh(){
    $activeItem = $menu.find('.menu__link--active').css('color', '#eab96a');
    $lineWidth = $activeItem.outerWidth();
    $itemPosition = $activeItem.position().left;
  }
  refresh();

  $menu.css('position', 'relative');

  function lineSet(){
    $line.css({
      'position': 'absolute',
      'background-color': '#eab96a',
      'top': '99px',
      'bottom': '0',
      'height': '3px'
    }).animate({
      'left': $itemPosition,
      'width': $lineWidth
    }, 300);
  }
  lineSet();

  $menu.find('.menu__link').on('click', function (){
    $activeItem.removeClass('menu__link--active').css('color', '#ffffff');
    $(this).addClass('menu__link--active').css('color', '#eab96a');
    refresh();
    lineSet();
  });

});

// --- Menu Fixed ---

$(function(){

  $(window).scroll(function(){
    var st = $(this).scrollTop();
    if ( st >= 100 ) {
      $('.fixed').css('display', 'block').fadeIn('fast');
    } else if ( st <= 120 ) {
      $('.fixed').css('display', 'none').fadeOut('fast');
    }
  });

  var $menu = $('.fixed-menu'),
      $line = $('<div>').appendTo($menu),
      $activeItem,
      $lineWidth,
      $itemPosition;

  function refresh(){
    $activeItem = $menu.find('.fixed-menu__link--active').css('color', '#eab96a');
    $lineWidth = $activeItem.outerWidth();
    $itemPosition = $activeItem.position().left;
  }
  refresh();

  $menu.css('position', 'relative');

  function lineSet(){
    $line.css({
      'position': 'absolute',
      'background-color': '#eab96a',
      'top': '49px',
      'bottom': '0',
      'height': '3px'
    }).animate({
      'left': $itemPosition,
      'width': $lineWidth
    }, 300);
  }
  lineSet();

  $menu.find('.fixed-menu__link').on('click', function (){
    $activeItem.removeClass('fixed-menu__link--active').css('color', '#ffffff');
    $(this).addClass('fixed-menu__link--active').css('color', '#eab96a');
    refresh();
    lineSet();
  });

});

// ------------ Program ------------

// --- Tabs ---

$(function(){
  var $tabs = $('.progtabs'),
      $line = $('<div>').appendTo($tabs),
      $activeTab,
      $lineWidth,
      $itemPosition;

  function refresh(){
    $activeTab = $tabs.find('.progtabs__item--active').css('color', '#000000');
    $lineWidth = $activeTab.outerWidth();
    $itemPosition = $activeTab.position().left;
  }
  refresh();

  function lineSet(){
    $line.css({
      'margin': '0 auto',
      'position': 'absolute',
      'background-color': '#000000',
      'top': '90px',
      'bottom': '0',
      'height': '4px'
    }).animate({
      'left': $itemPosition,
      'width': $lineWidth
    }, 300);
  }
  lineSet();

  $('.progtabs__item').on('click', function(){
    var index = '#tab' + ($(this).index() + 1);
    $(this).addClass('progtabs__item--active').siblings().removeClass('progtabs__item--active').css('color', '#adadad');
    $('.progtabs__desk').find(index).addClass('progtabs__content--active').siblings().removeClass('progtabs__content--active');
    refresh();
    lineSet();
  });
});

// --- Gallery ---

$(function() {
  $('.gall-slider').slick({
    infinite: true,
    centerMode: true,
    initialSlide: 4,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: $('.prevarrow'),
    nextArrow: $('.nextarrow'),
  });
});

// --- Reviews ---

$(function() {
  $('.reviews-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    dots: true,
    appendDots: $('.reviews-slider__dots'),
    dotsClass: 'revslider__dots',
    prevArrow: $('.reviews-slider__arrow--prev'),
    nextArrow: $('.reviews-slider__arrow--next'),
  });
});


// --- Partners ---

$(function() {
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: $('.partners-slider__arrow--prev'),
    nextArrow: $('.partners-slider__arrow--next'),
  });
});


// --- Parallax ---

// --- backgrounds ---

//banner
$('.header').parallax({imageSrc: 'img/hbackground.jpg'});
//gallary
$('.gallery').parallax({imageSrc: 'img/gallerybg.jpg'});
//footer
$('.footer').parallax({imageSrc: 'img/footerbg.jpg'});

// --- coffe ---
