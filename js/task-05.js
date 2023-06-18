const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', handlerQuery)

function handlerQuery(evt) { 
    if (!input.value) { span.textContent = 'Anonymous' } else {
        span.textContent = evt.currentTarget.value;
    }
}