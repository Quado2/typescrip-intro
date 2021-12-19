function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	return n1 + n2;
}

let number1: number = 7;
const number2 = 5;
const showResult = true;
const phrase = 'Our result is: '

const result = add(+number1, number2, showResult, phrase);
console.log(result);
   