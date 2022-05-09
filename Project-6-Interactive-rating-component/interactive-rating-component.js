function onClick(numberId) {
    let number = document.getElementById('num');
    number.innerHTML = numberId;
}

function replace() {
    document.getElementById('initial_component').style.display="none";
    document.getElementById('thank_you_component').style.display="initial";
};