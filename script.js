const numKeys = document.querySelectorAll(".numkey");
const operatorKeys = document.querySelectorAll(".operator-key");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
let operator = "";
let storedOperator = "";
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
    if(storedOperator == "") {
        val1 = display.innerText;
        operator = this.innerText;
        console.log(val1, operator);
    } else {
        console.log("else");
        display.innerText = operate(val1, display.innerText, storedOperator);
        operator = this.innerText;
    }

}

function numClick() {
    if(display.innerText.length >= 14) { return; }
    if(display.innerText == 0) { display.innerText = ""; }

    if(operator === "") {
        console.log(this);
        display.innerText += this.innerText;
    }

    if(operator !== "") {
        storedOperator = operator;
        operator = "";
        display.innerText="";
        display.innerText += this.innerText;
    }
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return b !== 0 ? Number(a) / Number(b) : "ERR";
}

function operate(num1, num2, operator) {
    console.log("operating")
    if(operator === "+") { return add(num1, num2) }
    if(operator === "-") { return subtract(num1, num2) }
    if(operator === "*") { return multiply(num1, num2) }
    if(operator === "/") { return divide(num1, num2) }
}
