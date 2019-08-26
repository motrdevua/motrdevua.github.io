const pressed = [];
const secretCode = 'boom';

window.addEventListener('keyup', function(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if(pressed.join('').includes(secretCode)) {
    console.log('!!!BIG BANG!!!');
  }
  console.log(pressed);
});
