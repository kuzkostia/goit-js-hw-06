let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]')
const counter = document.querySelector('#value')

const subClick = () => {
    counterValue = counterValue - 1;
    counter.textContent = counterValue;
}

const addClick = () => {
    counterValue = counterValue + 1;
    counter.textContent = counterValue;
}

decrement.addEventListener('click', subClick);
increment.addEventListener('click', addClick);