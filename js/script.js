"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

Array.from(numbers).map(number => {
    number.addEventListnener("click", function() {           
        if (resultDisplayed === false) {
            input.innerHTML += this.innerHTML;
        }  else if (
            (resultDisplayed === true && lastChar === "+") ||
            (resultDisplayed === true && lastChar === "-") ||
            (resultDisplayed === true && lastChar === "x") ||
            (resultDisplayed === true && lastChar === "/") 
        ) 
        {
            reslutDisplayed = false;
            input.innerTHML += this.innerHTML;
        } else {
            resultDisplayed =  false;
            input.innerHTML = "";
            input.innerHTML += this.innerHTML;
        }
    });
});

Array.from(operators).map(operator => {
    operator.addEventListener("click", function(){
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.lenth - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            const newString = currentString.substring(0, currentString.lenght - 1) + this.innerTHML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console,log("enter a number first");
        } else {
            input.innerHTML += this.innerHTML;
        }
    });
});

numberSeven.addEventListener('click', function(){
    const value = numberSeven.innerHTML;
    echoThisText(value);
})

// echo = input
