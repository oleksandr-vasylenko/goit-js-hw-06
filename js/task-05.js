const input = document.querySelector('input#name-input');
const user = document.querySelector('span#name-output');

input.addEventListener(
  'input',
  event => (user.textContent = event.currentTarget.value)
);
