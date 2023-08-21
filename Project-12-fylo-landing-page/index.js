const submitButton = document.querySelector('.submit-button');
const errorMessage = document.querySelector('span.error-message');
const input = document.querySelector('.email-input');

function validateEmailAddress(emailAddress) {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(emailAddress) ? true : false;
}

function displayErrorMessage() {
    errorMessage.classList.add('active');
}

function hideErrorMessage() {
    errorMessage.classList.remove('active');
}

// actual code

submitButton.addEventListener('click', e => {
    e.preventDefault();

    const userInput = input.value;

    if(!validateEmailAddress(userInput)) {
        displayErrorMessage();
    } else {
        location.reload();
    }
});

input.addEventListener('keydown', () => {
    hideErrorMessage();
});