/**
 * Fullpage Settings
 */

$(document).ready(function() {
  let slideIndex = 1;
  let sliding = false;

  $('#fullpage').fullpage({
    menu: '#menu',
    anchors: [
      'about',
      'services',
      'portfolio',
      'team',
      'reviews',
      'blog',
      'contacts',
    ],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [
      'about',
      'services',
      'portfolio',
      'team',
      'reviews',
      'blog',
      'contacts',
    ],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: false,
    continuousVertical: true,
    offsetSections: false,
    resetSliders: true,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    // access
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    // view
    controlArrows: false,
    verticalCentered: true,
    // paddingTop: '4em',
    paddingBottom: '0px',
    responsiveWidth: 0,
    responsiveHeight: 0,

    // selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    // events
    onLeave(index, nextIndex, direction) {
      if (index === 3 && !sliding) {
        if (direction === 'down' && slideIndex < 3) {
          sliding = true;
          $.fn.fullpage.moveSlideRight();
          slideIndex += 1;
          return false;
        }
        if (direction === 'up' && slideIndex > 1) {
          sliding = true;
          $.fn.fullpage.moveSlideLeft();
          slideIndex -= 1;
          return false;
        }
      }
      if (index === 5 && !sliding) {
        if (direction === 'down' && slideIndex < 5) {
          sliding = true;
          $.fn.fullpage.moveSlideRight();
          slideIndex += 1;
          return false;
        }
        if (direction === 'up' && slideIndex > 1) {
          sliding = true;
          $.fn.fullpage.moveSlideLeft();
          slideIndex -= 1;
          return false;
        }
      }
      return true;
    },
    afterSlideLoad() {
      sliding = false;
    },
    afterLoad(anchorLink) {
      const menuItem = $('.menu__item');

      menuItem.each(function() {
        const menuItemHref = $(this)
          .children()
          .first()
          .attr('href');

        if (`#${anchorLink}` === menuItemHref) {
          $(this).addClass('menu__item--active');
        } else {
          $(this).removeClass('menu__item--active');
        }
      });
    },
  });

  $(
    '<divv class="fp-arrows"><div class="fp-arrow fp-arrow--up"><span></span></div><div class="fp-arrow fp-arrow--down"><span></span></div></div>'
  ).insertAfter('#fp-nav ul');

  $('.fp-arrow--up').on('click', function() {
    $.fn.fullpage.moveSectionUp();
  });
  $('.fp-arrow--down').on('click', function() {
    $.fn.fullpage.moveSectionDown();
  });
});
