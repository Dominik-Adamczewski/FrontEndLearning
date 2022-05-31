const errorMsg = document.querySelector('.error_msg');
const errorIcon = document.querySelector('.error_icon');
const form = document.querySelector('form');
const email = document.querySelector('#email');

function validateForm() {
    if(email.value === '') {
        errorMsg.style.visibility = 'visible';
        errorIcon.style.visibility = 'visible';
    } else {
        document.location.reload();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})