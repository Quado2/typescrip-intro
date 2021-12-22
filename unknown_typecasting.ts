let userInput: unknown;
let userName: string;

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
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

//TYPECASTING
let myLoves: unknown = 'hello';
(myLoves as string).toUpperCase();
console.log(myLoves)
