const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerForm);

function handlerForm(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!email.value || !password.value) {
    alert('All form fields must be filled in');
    return;
  }
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(data);

  evt.currentTarget.reset();
}
