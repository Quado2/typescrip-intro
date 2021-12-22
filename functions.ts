//Explicit return type.
function add1(n1: string, n2: number): string[]{
    return ['helo']
}

//function declaration
let combine1: Function;
combine1 = add1;

//we can define functions with the parameters
let combineValues: (a: number, b: boolean) => number;
//the above function takes two arguments and returns a number

//functions can have default parameter values and optional parameters
//as follows
function withOptional(name: string, age?: number, getEmail: boolean = true): number{
    return 10
}