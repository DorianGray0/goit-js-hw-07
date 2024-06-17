const btn = document.querySelector('.change-color');
const spn = document.querySelector('.color');

btn.addEventListener('click', handlerBtn);

function handlerBtn() {
  document.body.style.backgroundColor = getRandomHexColor();
  spn.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
