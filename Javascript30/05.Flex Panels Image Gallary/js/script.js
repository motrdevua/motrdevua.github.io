var panels = document.querySelectorAll('.panel');

function toggleOpen() {
  var next = this.nextElementSibling;
  var previous = this.previousElementSibling;

  this.classList.toggle('open');
  if (next === null) {
    previous.classList.remove('open');
  } else if (previous === null){
    next.classList.remove('open')
  } else {
    previous.classList.remove('open');
    next.classList.remove('open');
  }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(function (panel) {
  panel.addEventListener('click', toggleOpen);
});
panels.forEach(function (panel) {
  panel.addEventListener('transitionend', toggleActive);
});
