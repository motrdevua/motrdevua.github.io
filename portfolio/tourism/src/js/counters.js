$(window).scroll(function() {
  let a = 0;
  const parentOffset = $('.counters').offset().top - window.innerHeight;

  if (a === 0 && $(window).scrollTop() > parentOffset) {
    $('.counter__number').each(function() {
      const $this = $(this);
      const countTo = $this.attr('data-count');
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: 'linear',
          step() {
            $this.text(Math.floor(this.countNum));
          },
          complete() {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});
