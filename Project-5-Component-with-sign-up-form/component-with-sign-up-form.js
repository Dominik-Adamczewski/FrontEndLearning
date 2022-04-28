const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === '') {
        // show error
        // add error class
        setErrorFor(fname, 'First Name cannot be empty');
    }

    if(lnameValue === '') {
        // show error
        // add error class
        setErrorFor(lname, 'Last Name cannot be empty');
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
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    small.innerText = message;

    formControl.className = 'form_control error';
    img.className = 'exclamation-circle error';
    small.className = 'error_msg error';
}