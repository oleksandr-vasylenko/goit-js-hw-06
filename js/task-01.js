const catCounter = document.querySelectorAll('li.item');
console.log(`Number of categories: ${catCounter.length}`);
console.log('');

catCounter.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
  console.log('');
});
