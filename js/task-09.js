function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

btnRef.addEventListener('click', onClick);

function onClick() {
  let bcgColor = getRandomHexColor();
  document.body.style.backgroundColor = bcgColor;
  colorRef.textContent = bcgColor;
}
