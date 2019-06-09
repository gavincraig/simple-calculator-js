/*jshint esversion: 6 */
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
let expression = "";
let calcVal = document.getElementById("calculator-value");


/* 
    Listener for key presses
*/
keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        handleKeyPress(e);
    }
});

/*
    Handler for key presses.
    Calls handleOperatorPress() or handleNumberPress() based on presence of dataset.operator property.
*/
function handleKeyPress(e) {
    (e.target.dataset.operator) ? handleOperatorPress(e.target.dataset.operator) : handleNumberPress(e);
}

/*
    Handler for number key presses.
    If the value of screen isn't the default 0, appends pressed number to current display value. Otherwise replaces 0.
*/
function handleNumberPress(e) {
    let value = parseFloat(calcVal.innerHTML);
    (value > 0) ? calcVal.innerHTML += e.target.value : calcVal.innerHTML = e.target.value;
}

/*
    Handler for Operator key presses.
    Calls a specific method based on the value of the operator property.
*/
function handleOperatorPress(operator) {
    switch (operator) {
        case "clear":
            clearOp();
            break;
        case "delete":
            deleteOp();
            break;
        case "equals":
            equalsOp();
            break;
        case "add":
            arithmeticOp("+");
            break;
        case "subtract":
            arithmeticOp("-");
            break;
        case "multiply":
            arithmeticOp("*");
            break;
        case "divide":
            arithmeticOp("/");
            break;
    }
}

/*
    Clears the screen by resetting the display value to 0.
*/
function clearOp() {
    calcVal.innerHTML = 0;
}

/*
    Deletes last entered number.
    If length of display value is only one number - replaces with 0 instead of a blank display.
*/
function deleteOp() {
    calcVal.innerHTML.length == 1 ? calcVal.innerHTML = 0 : calcVal.innerHTML = calcVal.innerHTML.substring(0, calcVal.innerHTML.length - 1);
}

/*
    Evaluates the expression string.
*/
function equalsOp() {
    calcVal.innerHTML = eval(expression + calcVal.innerHTML);
    expression = '';
}

/*
    Adds and arithmetical operator to the expression based on the operator symbol passed as a parameter.
*/
function arithmeticOp(operator) {
    expression = ((calcVal.innerHTML) + operator);
    calcVal.innerHTML = 0;
}
