const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const item of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;

  const listEl = document.querySelector('#ingredients');
  listEl.appendChild(itemEl);
}
