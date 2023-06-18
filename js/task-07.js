const selectors = {                                  
    input: document.querySelector('#font-size-control'),
    textSpan: document.querySelector('#text')
}

selectors.input.addEventListener('input', handlerTextSize);

function handlerTextSize(evt) { 
    selectors.textSpan.style.fontSize = `${Number(evt.currentTarget.value)}px`;
    
}
