const input = document.querySelector('input#name-input');
const user = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (
    event.currentTarget.value.trim().length !== 0 &&
    event.currentTarget.value !== ''
  ) {
    user.textContent = event.currentTarget.value;
  } else {
    user.textContent = 'Anonymous';
  }
}
