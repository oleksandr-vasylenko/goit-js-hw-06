// Завдання 3
// Напиши скрипт для створення галереї зображень
// на підставі масиву даних.HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в < li >.Для створення розмітки
// використовуй шаблонні рядки і метод insertAdjacentHTML().

// - Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// - Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ------ function 01
// const makeGalleryRef = images => {
//   const { url, alt } = images;
//   return `<ul class="gallery"><li><images src="${url}" alt="${alt}"></images></li>`;
// };

// const galleryRef = document.querySelector('.gallery');
// galleryRef.append(...images);

// ------ for of
for (const item of images) {
  const itemRef = document.createElement('li');

  const imgRef = document.createElement('img');
  imgRef.src = item.url;
  imgRef.alt = item.alt;
  imgRef.width = 640;

  itemRef.appendChild(imgRef);
  const listEl = document.querySelector('.gallery');
  listEl.style.listStyle = 'none';
  listEl.style.display = 'flex';
  listEl.style.flexDirection = 'column';
  listEl.style.alignItems = 'center';
  listEl.style.gap = '20px';

  listEl.appendChild(itemRef);
}

// ------ map - 01
// images.map(item => {
//   const listRef = document.createElement('li');
//   const imgRef = document.createElement('img');
//   imgRef.src = item.url;
//   imgRef.alt = item.alt;
//   imgRef.width = 640;
//   listRef.appendChild(imgRef);

//   console.log(`text: ${listRef.textContent}`);

//   const galRef = document.querySelector('.gallery');
//   galRef.insertAdjacentHTML('beforebegin', `${listRef}`);
// });

// ------ map - 02
// for (const item of images) {
//   const itemRef = document.createElement('li');

//   const imgRef = document.createElement('img');
//   imgRef.src = item.url;
//   imgRef.alt = item.alt;
//   imgRef.width = 640;

//   itemRef.appendChild(imgRef);
//   const listRef = document.querySelector('.gallery');
//   listRef.style.listStyle = 'none';
//   listRef.style.display = 'flex';
//   listRef.style.flexDirection = 'column';
//   listRef.style.alignItems = 'center';
//   listRef.style.gap = '20px';

//   listRef.insertAdjacentHTML('beforebegin', itemRef);
//   //   listEl.appendChild(itemRef);
// }
