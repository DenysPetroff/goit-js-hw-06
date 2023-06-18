function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) { 
 
  for (let i = 1; i <= amount; i += 1) { 
    let newBox = document.createElement('div');
    let j = 10 * (i-1);
    newBox.style.width = `${30 + j}px`;
    newBox.style.height = `${30 + j}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    selectors.boxes.append(newBox);
      }
 }

const selectors = {                                   
    divControls: document.querySelector('#controls'),
    boxes: document.querySelector('#boxes')
}
 
const input = selectors.divControls.firstElementChild;
const buttonDestroy = selectors.divControls.lastElementChild;
const buttonCreate = buttonDestroy.previousElementSibling;


input.addEventListener('input', handlerNumber);
buttonCreate.addEventListener('click', handlerCreate);
buttonDestroy.addEventListener('click', handlerDestroy);

let amount;

function handlerNumber(evt) { 
  amount = Number(evt.currentTarget.value);
}

function handlerCreate() { 
  createBoxes(amount);
}

function handlerDestroy() { 
  input.value = '';
  selectors.boxes.innerHTML = '';
}


