// ==================== CARDS SLIDER =======================

$(function() {
  $('.cards-slider').slick({
    infinite: false,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    appendDots: '.cards-slider-pagination',
    dotsClass: 'pagination__list',
    customPaging() {
      return $('<div class="pagination__dot"></div>');
    },
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1640,
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

  // Filter

  const filterButton = $('.filter__button');

  filterButton.on('click', function(e) {
    e.preventDefault();

    const $this = $(this);
    const filterValue = $this.attr('data-filter');

    $this
      .toggleClass('filter__button--active')
      .siblings()
      .removeClass('filter__button--active');

    let filtered = false;

    if (filtered === false) {
      $('.cards-slider').slick('slickUnfilter');
      $('.cards-slider').slick('slickFilter', function() {
        return $(`[data-filter='${filterValue}']`, this).length === 1;
      });
      filtered = true;
    } else {
      $('.cards-slider').slick('slickUnfilter');
      filtered = false;
    }
  });
});
