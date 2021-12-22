"use strict";
//UNION
//A data can be a union of more than one type
function combine(input1, input2) {
    return input1.toString() + input2.toString();
}
console.log(combine('Quado#', 123));
//Literal types. here resultConversion is a example
function combine2(input1, input2, resultConversion) {
    return input1.toString() + input2.toString();
}
//now we can use combinable in place of number | string
