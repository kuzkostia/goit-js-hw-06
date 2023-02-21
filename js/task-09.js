const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

function changeBodyColor() {
  const color = getRandomHexColor();
  body.style.background = color;
  colorSpan.textContent = color;
}

changeButton.addEventListener('click',changeBodyColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
