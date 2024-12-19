function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a !== 0 ? a / b : "ERR";
}

function operate(num1, num2, operator) {
    if(operator === "+") { return add(num1, num2) }
    if(operator === "-") { return subtract(num1, num2) }
    if(operator === "*") { return multiply(num1, num2) }
    if(operator === "/") { return divide(num1, num2) }
}
