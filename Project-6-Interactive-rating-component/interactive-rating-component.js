const submitButton = document.getElementById('submit_button');
const ratings = document.querySelectorAll('.number');

function saveChosenRating() {
    let element = this.innerHTML;
    let number = document.getElementById('num');
    number.innerHTML = element;
}

function replace() {
    document.getElementById('initial_component').style.display="none";
    document.getElementById('thank_you_component').style.display="initial";
};

ratings.forEach(rating => {
    rating.addEventListener('click', saveChosenRating);
});

submitButton.addEventListener('click', replace);