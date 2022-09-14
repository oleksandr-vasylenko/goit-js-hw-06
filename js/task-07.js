const range = document.querySelector('input#font-size-control');
const content = document.querySelector('#text');

range.addEventListener('input', () => {
  const rangeValue = range.value;
  content.style.fontSize = rangeValue + 'px';
});
