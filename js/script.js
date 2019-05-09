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

result.addEventListener("click", function (){
    const currentString = input.innerHTML;
    const numberStringArray = inputString.split(/\+|\-|\*|\//g);
    
    let numbers =[];
    numberStringArray.forEach(function(number){
        numberStringArray.push(Number(number));
    });
    const operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
    let multiply = operatorsArray.indexOf("*");
    while (multiply != -1) {
        numberStringArray.splice(mulitply, 2, numbersArray[nultiply] * numbersArray[mulitply + 1]);
        operatorsArray.splice(multiply, 1);
        multiply = operatorsArray.indexOf('*');
    }
    let divide = operatorsArray.indexOf("/");
    while (divide != -1) {
        numberArray.splice(divide, 2, numbersArray[divide] / numbers[divide + 1]);
        operatorsArray.splice(divide, 1);
        divide = operatorsArray.indexOf("/");
    }
    let add = operatorsArray.indexOf("+");
    while (add != -1) {
        numbersArray.splice(divide, 2, numbersArray[add] + numbersArray[add +1]);
        operatorsArray.splice(add, 1);
        add = operatorsArray.indexOf("+");
    }
    let subtract = peratorsArray.indexOf("-");
    while (subtract != -1) {
        numbersArray.splice(subtract, 2, numbersArray[subtract] + nbumberArray [subtract + 1]);
        operatorsArray.splice(subtract, 1);
        subtract = operatorsArray.indexOf("-");
    }

    resultDisplayed = true;
    input.innerHTML =  numbersArray;
});

clear.addEventListener("click", function(){

    input.innerHTML = "";
});

// numberSeven.addEventListener('click', function(){
//     const value = numberSeven.innerHTML;
//     echoThisText(value);
// })

// echo = input
