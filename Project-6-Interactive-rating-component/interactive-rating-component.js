function replace() {
    document.getElementById('initial_component').style.display="none";
    document.getElementById('thank_you_component').style.display="initial";
};

function reply_click(clicked_id) {
    let number = clicked_id;
    document.getElementById('id-1').innertHTML = `You selected ${number} out of 5`;
};