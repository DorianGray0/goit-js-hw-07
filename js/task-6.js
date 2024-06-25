function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', handlerClick);
btnDestroy.addEventListener('click', destroyBoxes);

function handlerClick() {
  const valueInp = parseInt(input.value);
  if (valueInp > 0 && valueInp <= 100) {
    input.value = '';
    createBoxes(valueInp);
  } else {
    alert('You have to choose number between 1 and 100');
  }
}

function createBoxes(amount) {
  const boxDiv = document.getElementById('boxes');
  boxDiv.innerHTML = '';

  let size = 30;
  let divElem = '';

  for (let i = 0; i < amount; i += 1) {
    divElem += `
    <div style="
    width: ${size}px;
    height: ${size}px;
    background-color: ${getRandomHexColor()};
    "> </div>
    `;
    size += 10;
  }
  boxDiv.insertAdjacentHTML('beforeend', divElem);
}

function destroyBoxes() {
  const boxDiv = document.getElementById('boxes');
  boxDiv.innerHTML = '';
}
