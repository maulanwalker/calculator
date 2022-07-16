const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
const currentDisplay = [];

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    if(calculationOperator !== '' && prevNumber !== '' && currentNumber !== ''){
        calculate();
        updateScreen(currentNumber);
    }else{
        if(prevNumber !== ''){
            if(calculationOperator === ''){
                updateScreen(currentNumber);
            }else{
                updateScreen(prevNumber);
            }
        }
    }
})

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}
        
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}
    
const clearBtn = document.querySelector('.all-clear');
    
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}

const percent = document.querySelector('.percentage');

percent.addEventListener('click', (event) => {
    inputPercent(event.target.value);
    updateScreen(currentNumber);
})

const inputPercent = (percentage) => {
    if(currentNumber.includes(percentage)){
        return
    }
    currentNumber = parseInt(currentNumber) / 100;
}