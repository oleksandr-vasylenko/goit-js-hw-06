// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// 1. Яка кількість смиволів повинна бути в інпуті,
// зазначається в його атрибуті data - length.

// 2. Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onFocusChange);

function onFocusChange(event) {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.add('invalid');
  }
}
