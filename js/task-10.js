function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberRef = document.querySelector('#controls input');
// console.dir(numberRef);

const createRef = document.querySelector('[data-create]');
// console.log(createRef);

const destroyRef = document.querySelector('[data-destroy]');
// console.log(destroyRef);

// numberRef.addEventListener('click', onSelect);

// function onSelect(event) {

// }

createRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  console.log(numberRef.value);
}
