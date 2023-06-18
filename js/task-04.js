const counter = document.querySelector('#counter');
const counterText = document.querySelector('#value');

const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;

decrement.addEventListener('click', handlClickDown); 
increment.addEventListener('click', handlClickUp);

let counterValue = 0;


function handlClickUp() { 
    counterValue += 1;
    counterText.textContent = counterValue;
}

function handlClickDown() { 
    counterValue -= 1;
    counterText.textContent = counterValue;
}
