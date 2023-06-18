const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlValid);




function handlValid(evt) { 

const inputLength = Number(input.getAttribute('data-length'));
const inputValueLength = input.value.length;

    if (inputLength === inputValueLength) {
        evt.currentTarget.classList.remove('invalid');
        evt.currentTarget.classList.add('valid');

    } else {
        evt.currentTarget.classList.remove('valid');
        evt.currentTarget.classList.add('invalid');
    }
}