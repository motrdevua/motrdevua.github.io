$(document).ready(function() {
  $('.tooltip').tooltipster({
    contentCloning: true,
    animation: 'grow',
    delay: [100, 100],
    animationDuration: [100, 100],
    maxWidth: 220,
    theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
    arrow: false,
    plugins: ['follower'],
  });
});
