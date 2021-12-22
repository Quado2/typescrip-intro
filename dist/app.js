"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "max";
//unknown type is more like any but forces restrictions such as show
//below. if the check is not done, then we would not be able to
//asign a userInput of type unknown to username of type string
if (typeof userInput === "string") {
    userName = userInput;
}
//there is a type referred to as never.
//This ussually used in as function return types which means that the
// function will never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
