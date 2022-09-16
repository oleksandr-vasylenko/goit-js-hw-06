const loginRef = document.querySelector('.login-form');

loginRef.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('Come on, Man fill in the email and the password 😉');
  }

  const { email, password } = event.currentTarget.elements;
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
}
