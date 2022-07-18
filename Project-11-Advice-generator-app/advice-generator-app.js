const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const diceButton = document.querySelector('.dice-icon-container');

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');

    if(response.status !== 200) {
        throw new Error('Cannot fetch data! Please try again later.');
    }

    const data = await response.json();
    return data;
}

const updateUI = (data) => {
    const id = data.slip.id;
    const adv = data.slip.advice;

    adviceId.innerHTML = id;
    advice.innerHTML = `"${adv}"`;
}

diceButton.addEventListener('click', () => {
    getAdvice()
        .then(data => updateUI(data))
        .catch(error => console.error(error.message));
})