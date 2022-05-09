function onClick() {
    let element = this.innerHTML;
    let number = document.getElementById('num');
    number.innerHTML = element;
}

function replace() {
    document.getElementById('initial_component').style.display="none";
    document.getElementById('thank_you_component').style.display="initial";
};

document.getElementById('1').onclick = onClick;
document.getElementById('2').onclick = onClick;
document.getElementById('3').onclick = onClick;
document.getElementById('4').onclick = onClick;
document.getElementById('5').onclick = onClick;

const submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', replace);