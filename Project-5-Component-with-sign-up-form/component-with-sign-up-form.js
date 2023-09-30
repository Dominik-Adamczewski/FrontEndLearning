const form = document.getElementById('form');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputs = document.querySelectorAll('input');

let errorMessages = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

inputs.forEach(input => {
    input.addEventListener('keypress', () => {
        clearErrors(input);
    });
});

function clearErrors(input) {
    const errorClass = 'error';
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    formControl.classList.remove(errorClass);
    img.classList.remove(errorClass);
    small.classList.remove(errorClass);
    input.classList.remove(errorClass);
    errorMessages = false;
}

function setErrorFor(input, message) {
    const errorClass = 'error';
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    small.innerText = message;

    formControl.classList.add(errorClass);
    img.classList.add(errorClass);
    small.classList.add(errorClass);
    input.classList.add(errorClass);
    errorMessages = true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateLength(value) {
    const regex = /^.{8,}$/;
    return regex.test(value);
}

function checkInputs() {
    // get the values from inputs
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        // show error
        // add error class
        setErrorFor(firstNameInput, 'First Name cannot be empty');
    }

    if(lastNameValue === '') {
        // show error
        // add error class
        setErrorFor(lastNameInput, 'Last Name cannot be empty');
    }

    if(emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'Looks like this is not en email');
    } else if(!validateEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid email address')
    }

    if(passwordValue === '') {
        //show error
        // add error class
        setErrorFor(password, 'Password cannot be empty');
    } else if(!validateLength(passwordValue)) {
        console.log('dupa');
        setErrorFor(password, 'Your password needs to be at least 8 characters long')
    }

    if(errorMessages === false) {
        alert('Form submitted successfully!');
        location.reload();
    }
}