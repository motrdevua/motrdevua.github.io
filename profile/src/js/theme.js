const toggleTheme = $('.theme');

const transition = function() {
  document.documentElement.classList.add('transition');
  window.setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

toggleTheme.on('click', function() {
  if ($(this).hasClass('dark')) {
    transition();
    $(this)
      .removeClass('dark')
      .addClass('light');
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    transition();
    $(this)
      .removeClass('light')
      .addClass('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

$('.toggle-box .icon').on('click', function() {
  if ($(this).hasClass('icon--lightbulb-off')) {
    $(this).fadeOut(100);
    $(this)
      .removeClass('icon--lightbulb-off')
      .addClass('icon--lightbulb-on');
    $('.icon--lightbulb-on use').attr('xlink:href', '#lightbulb-on');
    $(this).fadeIn(300);
  } else {
    $(this).fadeOut(100);
    $(this)
      .removeClass('icon--lightbulb-on')
      .addClass('icon--lightbulb-off');
    $('.icon--lightbulb-off use').attr('xlink:href', '#lightbulb-off');
    $(this).fadeIn(300);
  }
});
