const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
let arr = [];

ingredients.forEach(item => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = item;
  arr.push(itemRef);
});

listRef.append(...arr);
