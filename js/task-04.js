const decBtnRef = document.querySelector('[data-action="decrement"]');
const incBtnRef = document.querySelector('[data-action="increment"]');
const currValue = document.querySelector('#value');
let counterValue = 0;

decBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  currValue.textContent = counterValue;
});

incBtnRef.addEventListener('click', () => {
  counterValue += 1;
  currValue.textContent = counterValue;
});
