// ================== smoothscroll to anchor =================

$(function() {
  $("a[href*='#']").on('click', function() {
    var target = $(this).attr("href");
    var tar = target.split("#");
    var targetSection = tar[1];
    if (!targetSection || targetSection == '') {
      return;
    } else {
      targetSection = '#' + targetSection;
      var targetOffset = Math.floor($(targetSection).offset().top);
      //scroll
      $('html,body').animate({
        scrollTop: targetOffset
      }, 1200, function() {
        $(window).scroll();
      });
      return false;
    }
  })
});
