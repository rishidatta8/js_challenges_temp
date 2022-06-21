const buttons = document.getElementsByTagName('button');
let button;
let toMatch;
let key;
let random;

const start = () => {
  random = Math.floor(Math.random() * 53);
  button = buttons[random];
  button.classList.add('jiggle');
};

const logKey = (event) => {
  event.preventDefault();
  key = event.key.toLowerCase();
  toMatch = button.getAttribute('data-key').toLowerCase();

  if (toMatch === 'backspace') {
    if (key === 'backspace' || key === 'delete') {
      key = 'backspace';
    }
  }

  if (key === toMatch) {
    button.classList.remove('jiggle');
    start();
  }
};

document.addEventListener('keydown', logKey);
start();
