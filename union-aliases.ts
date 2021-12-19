//UNION
//A data can be a union of more than one type

function combine(input1: number | string, input2: number|string){
    return input1.toString() + input2.toString()
}

console.log(combine('Quado#', 123))

//Literal types. here resultConversion is a example
function combine2(
    input1: number | string,
    input2: number|string,
    resultConversion: 'as-number' | 'as-text'){
    return input1.toString() + input2.toString();
}

//type alias

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

//now we can use combinable in place of number | string