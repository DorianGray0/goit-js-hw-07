const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', handlerInput);

function handlerInput(evt) {
  const nameIn = evt.currentTarget.value.trim();
  console.log(nameIn);
  if (nameIn) {
    span.textContent = nameIn;
  } else {
    span.textContent = 'Anonymous';
  }
}
