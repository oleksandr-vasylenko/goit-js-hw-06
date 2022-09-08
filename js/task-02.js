const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// --- "for of" option
for (const item of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;

  const listEl = document.querySelector('#ingredients');
  listEl.appendChild(itemEl);
}

// --- .map option
// ingredients.map(item => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = item;
//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(itemEl);
// });
