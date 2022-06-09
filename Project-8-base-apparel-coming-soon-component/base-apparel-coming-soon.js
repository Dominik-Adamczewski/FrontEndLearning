const errorMsg = document.querySelector('.error_msg');
const errorIcon = document.querySelector('.error_icon');
const form = document.querySelector('form');
const email = document.querySelector('#email');

const popUp = document.querySelector('.popup-wrapper');
const popUpClose = document.querySelector('.popup-close');
const popUpConfirmButton = document.querySelector('.popup-confirm-button');

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
        popUp.style.display = 'block';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

popUpClose.addEventListener('click', () => {
    popUp.style.display = 'none';
    document.location.reload();
});

popUp.addEventListener('click', () => {
    popUp.style.display = 'none';
    document.location.reload();
})

popUpConfirmButton.addEventListener('click', () => {
    popUp.style.display = 'none';
    document.location.reload();
})