function removeActiveStyle() {
    let activeButton = document.querySelectorAll('.tip-percentage.button-active');
    activeButton.forEach((element) => {
        if(element.classList.contains('button-active')) {
            element.classList.remove('button-active');
        }
    })
};

function removeBillError() {
    if(billError.classList.contains('error-active')) {
        billError.classList.remove('error-active');
    }

    if(billInput.classList.contains('input-error')) {
        billInput.classList.remove('input-error');
    }
};
function removePeopleError() {
    if(peopleError.classList.contains('error-active')) {
        peopleError.classList.remove('error-active');
    }

    if(peopleInput.classList.contains('input-error')) {
        peopleInput.classList.remove('input-error');
    }
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

const error = document.querySelector('.error');

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
            if(button.value === '5%') {
                tipPercentage = 0.05;
            } else if(button.value === '10%') {
                tipPercentage = 0.1;
            } else if(button.value === '15%') {
                tipPercentage = 0.15;
            } else if(button.value === '25%') {
                tipPercentage = 0.25;
            } else if(button.value === '50%') {
                tipPercentage = 0.5;
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
    billInput.value = '';
    customTipButton.value = '';
    error.style.display = 'none';
    removePeopleError();
    removeBillError();
})

// calculate tip amount and total amount per person + display error if not enough data

calculateButton.addEventListener('click', () => {
    if(billAmount === 0 || numberOfPeople === 0 || tipPercentage === 0) {
        error.style.display = 'flex';
    } else {
        error.style.display = 'none';

        totalAmountPerPersonValue = billAmount / numberOfPeople;
        tipAmountPerPersonValue = billAmount * tipPercentage / numberOfPeople;

        tipAmount.textContent = `${tipAmountPerPersonValue.toFixed(2)}$`;
        totalAmount.textContent = `${totalAmountPerPersonValue.toFixed(2)}$`;
    }
})
