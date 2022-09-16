function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
console.log(btnRef);

btnRef.addEventListener('click', onClick);

function onClick() {
  document.body.style.backgroundColor = getRandomHexColor();
}
