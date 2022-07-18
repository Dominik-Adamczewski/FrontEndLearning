function removeActiveStyle() {
    let activeButton = document.querySelectorAll('.tip-percentage.button-active');
    activeButton.forEach((element) => {
        element.classList.remove('button-active');
    })
};

function removeBillError() {
    billError.classList.remove('error-active');

    billInput.classList.remove('input-error');

};
function removePeopleError() {
    peopleError.classList.remove('error-active');

    peopleInput.classList.remove('input-error');
};


const tipButtons = document.querySelectorAll('.tip-percentage');
const customTipButton = document.querySelector('#custom-percent');

const peopleInput = document.querySelector('#people');
const billInput = document.querySelector('#bill');

const peopleError = document.querySelector('.people-error');
const billError = document.querySelector('.bill-error');

const resetButton = document.querySelector('.reset');
const calculateButton = document.querySelector('.calculate');

const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');

const error = document.querySelector('.general-error');

let tipAmountPerPersonValue;
let totalAmountPerPersonValue;
let tipPercentage = 0;
let billAmount = 0;
let numberOfPeople = 0;

// add styles for clicked % of tip + save percentage to variable

tipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // add styles for clicked button
        removeActiveStyle();
        button.classList.toggle('button-active');

        // save percentage to variable
        if(button.classList.contains('button-active')) {
            if(button.value) {
                tipPercentage = +button.value/100;
            }
        };
    })
});

// save percentage to variable, when it's written in custom input

customTipButton.addEventListener('keyup', () => {
    if(customTipButton.value > 0) {
        tipPercentage = customTipButton.value / 100;
    }
})

// add a validation on people and bill inputs, for 0 vlaue

peopleInput.addEventListener('blur', () => {
    if(peopleInput.value < 1) {
        peopleError.classList.add('error-active');
        peopleInput.classList.add('input-error');
    }
})

billInput.addEventListener('blur', () => {
    if(billInput.value < 1) {
        billError.classList.add('error-active');
        billInput.classList.add('input-error');
    }
})

// remove error when user is correcting the value from bill and people inputs + save the typed value of the input

billInput.addEventListener('keydown', () => {
    removeBillError();
})

billInput.addEventListener('keyup', () => {
    billAmount = billInput.value;
})

peopleInput.addEventListener('keydown', () => {
    removePeopleError();
})

peopleInput.addEventListener('keyup', () => {
    numberOfPeople = peopleInput.value;
})


// clear the whole component after clicking reset button

resetButton.addEventListener('click', () => {
    tipButtons.forEach( () => {
        removeActiveStyle();
    })
    tipAmount.textContent = '0.00$';
    totalAmount.textContent = '0.00$';
    peopleInput.value = '';
    numberOfPeople = 0;
    billInput.value = '';
    billAmount = 0;
    customTipButton.value = '';
    tipPercentage = 0;
    error.classList.remove('general-error-active');
    removePeopleError();
    removeBillError();
})

// calculate tip amount and total amount per person + display error if not enough data

calculateButton.addEventListener('click', () => {
    if(billAmount === 0 || numberOfPeople === 0 || tipPercentage === 0) {
        error.classList.add('general-error-active');
    } else {
        error.classList.remove('general-error-active');

        totalAmountPerPersonValue = billAmount / numberOfPeople;
        tipAmountPerPersonValue = billAmount * tipPercentage / numberOfPeople;

        tipAmount.textContent = `${tipAmountPerPersonValue.toFixed(2)}$`;
        totalAmount.textContent = `${totalAmountPerPersonValue.toFixed(2)}$`;
    }
})
