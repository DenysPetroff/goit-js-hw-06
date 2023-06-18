function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const selectors = {                                   
    bodyColor: document.querySelector('body'),
    spanColor: document.querySelector('.color'),
    buttonColor: document.querySelector('.change-color')
    }


selectors.buttonColor.addEventListener('click', handlerClick);

function handlerClick() { 
  const color = getRandomHexColor();
  selectors.bodyColor.style.backgroundColor = color;
  selectors.spanColor.textContent = color;
}
