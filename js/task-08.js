const selectors = {                           
        form: document.querySelector('.login-form'),
    }

selectors.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) { 
    evt.preventDefault();
    
    const { email, password } = evt.currentTarget.elements;
    
    if (!email.value || !password.value) {
        alert('заповніть поля!')
    } else {

        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data);
    }
evt.currentTarget.reset();

}

