const myPanel = document.querySelector('.wrapper');
const subPanel = document.querySelector('.container');

let mouseX;
let mouseY;

const transformAmount = 0.5;

function transformPanel(mouseEvent) {
  mouseX = mouseEvent.pageX;
  mouseY = mouseEvent.pageY;

  const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
  const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

  const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
  const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

  subPanel.style.msTransform = `perspective(400px) rotateY(${percentX *
    transformAmount}deg) rotateX(${percentY * transformAmount}deg)`;
  subPanel.style.webkitTransform = `perspective(400px) rotateY(${percentX *
    transformAmount}deg) rotateX(${percentY * transformAmount}deg)`;
  subPanel.style.MozTransform = `perspective(400px) rotateY(${percentX *
    transformAmount}deg) rotateX(${percentY * transformAmount}deg)`;
  subPanel.style.OTransform = `perspective(400px) rotateY(${percentX *
    transformAmount}deg) rotateX(${percentY * transformAmount}deg)`;
  subPanel.style.transform = `perspective(400px) rotateY(${percentX *
    transformAmount}deg) rotateX(${percentY * transformAmount}deg)`;
}

function handleMouseEnter() {
  setTimeout(() => {
    subPanel.style.transition = '';
  }, 100);
  subPanel.style.msTransition = 'transform 0.1s';
  subPanel.style.webkitTransition = 'transform 0.1s';
  subPanel.style.MozTransition = 'transform 0.1s';
  subPanel.style.OTransition = 'transform 0.1s';
  subPanel.style.transition = 'transform 0.1s';
}

function handleMouseLeave() {
  subPanel.style.msTransition = 'transform 0.1s';
  subPanel.style.webkitTransition = 'transform 0.1s';
  subPanel.style.MozTransition = 'transform 0.1s';
  subPanel.style.OTransition = 'transform 0.1s';
  subPanel.style.transition = 'transform 0.1s';
  setTimeout(() => {
    subPanel.style.msTransition = '';
    subPanel.style.webkitTransition = '';
    subPanel.style.MozTransition = '';
    subPanel.style.OTransition = '';
    subPanel.style.transition = '';
  }, 100);

  subPanel.style.msTransform = 'perspective(400px) rotateY(0deg) rotateX(0deg)';
  subPanel.style.webkitTransform =
    'perspective(400px) rotateY(0deg) rotateX(0deg)';
  subPanel.style.MozTransform =
    'perspective(400px) rotateY(0deg) rotateX(0deg)';
  subPanel.style.OTransform = 'perspective(400px) rotateY(0deg) rotateX(0deg)';
  subPanel.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg)';
}

document.body.onmousemove = transformPanel;
document.body.onmouseenter = handleMouseEnter;
document.body.onmouseleave = handleMouseLeave;
