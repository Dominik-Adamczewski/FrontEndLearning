const form = document.getElementById('form');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

let errorMessages = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

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
    }

    if(passwordValue === '') {
        //show error
        // add error class
        setErrorFor(password, 'Password cannot be empty');
    }
    
    if(errorMessages === false) {
        // alert message when there are no errors in the form
        alert('Form submitted successfully!');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    small.innerText = message;

    formControl.className = 'form_control error';
    img.className = 'exclamation-circle error';
    small.className = 'error_msg error';
    
    errorMessages = true;
}
