"use strict";
var inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function update() {
  var suffix = this.dataset.sizing || '';
  var value = this.value;
  var sum = value + suffix;
  document.documentElement.style.setProperty(`--${this.name}`, sum);
}

inputs.forEach(function (input){
  input.addEventListener('change', update);
});
