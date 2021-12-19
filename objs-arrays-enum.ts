const person: {
    name: string;
    age: number;
} = {
    name: 'quado',
    age:50,
};


//Array

//array of strings
let favorites: string[];
favorites=['quado', 'kay', 'amara'];

//array of all data types
let every: any[];
every=['hoe', 23];


//tuple
//tuple is a fixed length array with fixed data type
let role: [number, string];
role = [32,'great man'];


//enum
enum Role {ADMIN, USER, AUTHOR}

let human: {
    name: string;
    stack: string;
    role: Role;
}={
    name:'edozie',
    stack:'MERN',
    role: Role.ADMIN
}

if(human.role === Role.ADMIN){
    console.log('hello admin', Role.USER)
}

//values can be assigned to enum
enum levels {EASY, MEDIUM = 8, HARD='HARD', EXTRA_HARD=75}