const btn = document.querySelector('.change-color');
const spn = document.querySelector('.color');

btn.addEventListener('click', handlerBtn);

function handlerBtn() {
  const result = getRandomHexColor();
  document.body.style.backgroundColor = result;
  spn.textContent = result;
  console.log(result);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
