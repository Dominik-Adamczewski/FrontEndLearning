const error_msg = document.querySelector('.error_msg');
const error_icon = document.querySelector('.error_icon');
const form = document.querySelector('form');

function validateForm() {
    if(email.value === '') {
        error_msg.style.visibility = 'visible';
        error_icon.style.visibility = 'visible';
    } else {
        document.location.reload();
    }
}

form.addEventListener('submit', (f) => {
    f.preventDefault();
    validateForm();
})