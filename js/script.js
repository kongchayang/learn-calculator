"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
numbers.forEach(function(number){
    number.addEventListener('click', function(){
        console.log(this.innerHTML);
    })
})
// adding click handlers to the operation buttons
operators.forEach(function(operator){
    operator.addEventListener('click', function(){
        console.log(this.innerHTML);
    })
})

// on click of 'equal' button
result.addEventListener('click', function(){
        console.log(this.innerHTML);
})
// clearing the input on press of clear
input.addEventListener('click', function(){
    console.log(this.innerHTML);
})
// create a function for input to access class "number" 

function inputThisText()

// function inputThis(textToRepeat) {
//     console.log(textToRepeeat);
// }

// numberSeven.addEventListener('click', function(){
//     const value = numberSeven.innerHTML;
//     echoThisText(value);
// })

// echo = input
