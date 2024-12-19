const numKeys = document.querySelectorAll(".numkey");
const operatorKeys = document.querySelectorAll(".operator-key");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
let operator = "";
let val1 = ""; 
let val2 = "";


numKeys.forEach(numkey=> {
    numkey.addEventListener("click", numClick)
});
operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", operatorClick)
})

clearBtn.addEventListener("click", ()=> {
    display.innerText = 0;
})

function operatorClick() {
    val1 = display.innerText;
    operator = this.innerText;
    console.log(val1, operator);

}

function numClick() {
    if(display.innerText.length >= 14) { return; }
    if(display.innerText == 0) { display.innerText = ""; }

    if(operator === "") {
        console.log(this);
        display.innerText += this.innerText;
    }

    if(operator !== "") {
        operator = "";
        display.innerText="";
        display.innerText += this.innerText;
    }
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "ERR";
}

function operate(num1, num2, operator) {
    if(operator === "+") { return add(num1, num2) }
    if(operator === "-") { return subtract(num1, num2) }
    if(operator === "*") { return multiply(num1, num2) }
    if(operator === "/") { return divide(num1, num2) }
}
