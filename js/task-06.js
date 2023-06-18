const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlValid);




function handlValid(evt) { 

const inputLength = Number(input.getAttribute('data-length'));
const inputValueLength = input.value.length;

    evt.currentTarget.classList.add('invalid')
    
    if (inputLength === inputValueLength) { 
        evt.currentTarget.classList.replace('invalid', 'valid');
    }
    
}