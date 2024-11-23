'use strict';

const display = document.querySelector('.display');

let lastCharIsOperator = false;
let hasCalculated = false; 
let hasError = false; 

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'C') {
            clearDisplay();
        } else if (value === '←') {
            deleteLastCharacter();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            appendValue(value);
        } else {
            appendValue(value);
        }
    });
});

function appendValue(value) {
    if (hasCalculated || hasError) {
        clearDisplay(); 
        hasCalculated = false;
        hasError = false;
    }

    if (['+', '-', '*', '/', '%'].includes(value)) {
        appendOperator(value);
    } else {
        display.textContent += value;
        lastCharIsOperator = false; 
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];

    if (!operators.includes(lastChar)) {
        display.textContent += operator;
        lastCharIsOperator = true; 
    } else if (lastCharIsOperator) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    }
}

function deleteLastCharacter() {
    display.textContent = display.textContent.slice(0, -1);
}

function clearDisplay() {
    display.textContent = '';
    lastCharIsOperator = false; 
    hasCalculated = false; 
    hasError = false; 
}

function calculate() {
    try {
        let expression = display.textContent.trim();
        const lastChar = expression.slice(-1);
        const operators = ['+', '-', '*', '/', '%'];
        if (operators.includes(lastChar)) {
            expression = expression.slice(0, -1);
        }

        const result = eval(expression);
        display.textContent = result || '';
        hasCalculated = true; 
    } catch (e) {
        display.textContent = 'Error'; 
        hasError = true; 
    }
}
