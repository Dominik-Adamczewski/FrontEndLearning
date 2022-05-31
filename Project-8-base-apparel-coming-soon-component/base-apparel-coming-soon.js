const errorMsg = document.querySelector('.error_msg');
const errorIcon = document.querySelector('.error_icon');
const form = document.querySelector('form');
const email = document.querySelector('#email');
let emailValue = email.value;

function validateForm() {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(email.value === '') {
        errorMsg.style.visibility = 'visible';
        errorIcon.style.visibility = 'visible';
    } else if(regex.test(emailValue)) {
        console.log('Dupsko!')
    } else {
        document.location.reload();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})