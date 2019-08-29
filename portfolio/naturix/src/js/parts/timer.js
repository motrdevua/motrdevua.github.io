// ==================== COUNTDOWN TIMER =======================

$(function() {
  var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  var countDown = new Date('May 20, 2020 00:00:00').getTime(),
    x = setInterval(function() {
      var now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById('days').innerHTML = Math.floor(distance / day);
      document.getElementById('hours').innerHTML = Math.floor(
        (distance % day) / hour
      );
      document.getElementById('minutes').innerHTML = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById('seconds').innerHTML = Math.floor(
        (distance % minute) / second
      );
      if (distance < 0) {
        clearInterval(x);
      }
    }, second);
});
