const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', handlerQuery)

function handlerQuery(evt) { 
    if (!input.value.trim()) { span.textContent = 'Anonymous' } else {
        span.textContent = evt.target.value.trim();
    }
}