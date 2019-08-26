"use strict";
var fibArray = [];
var a = 0, b = 1;

function fibonacci(n) {
  fibArray.push(a);
  fibArray.push(b);
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    fibArray.push(c);
    a = b;
    b = c;
  }
  return b;
}

var n = prompt('enter fibonacci number:', '');

fibonacci(n);

console.log(fibArray);
