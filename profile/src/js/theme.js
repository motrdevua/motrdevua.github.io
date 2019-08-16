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
