function onClick() {
    let element = this.innerHTML;
    let number = document.getElementById('num');
    number.innerHTML = element;
}

function replace() {
    document.getElementById('initial_component').style.display="none";
    document.getElementById('thank_you_component').style.display="initial";
};

document.getElementById('1').addEventListener('click', onClick);
document.getElementById('2').addEventListener('click', onClick);
document.getElementById('3').addEventListener('click', onClick);
document.getElementById('4').addEventListener('click', onClick);
document.getElementById('5').addEventListener('click', onClick);

const submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', replace);