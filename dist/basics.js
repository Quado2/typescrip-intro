"use strict";
function add(n1, n2, showResult, phrase) {
    return n1 + n2;
}
let number1 = 7;
const number2 = 5;
const showResult = true;
const phrase = 'Our result is: ';
const result = add(+number1, number2, showResult, phrase);
console.log(result);
