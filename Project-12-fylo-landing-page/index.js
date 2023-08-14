const submitButton = document.querySelector('button[type="submit"]');
const errorMessage = document.querySelector('span.error');
const input = document.querySelector('form input');

function validateEmailAddress(emailAddress) {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(emailAddress) ? true : false;
}

function displayErrorMessage() {
    errorMessage.classList.add('active');
}

function removeErrorMessage() {
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
    removeErrorMessage();
});