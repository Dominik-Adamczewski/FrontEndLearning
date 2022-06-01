const errorMsg = document.querySelector('.error_msg');
const errorIcon = document.querySelector('.error_icon');
const form = document.querySelector('form');
const email = document.querySelector('#email');

function showError() {
    errorMsg.style.visibility = 'visible';
    errorIcon.style.visibility = 'visible';
}

function validateForm() {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(email.value === '') {
        showError();
    } else if(!regex.test(email.value)) {
        errorMsg.textContent = 'This is not a valid email';
        showError();
    } else {
        alert('Thank you for leaving your email address! We will get back to you shortly!');
        document.location.reload();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})