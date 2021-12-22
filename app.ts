interface Person {
    name: string;
    age: number;
}


function addPerson(person: Person){
    console.log(person)
}

let okeke: Person = {name:'quado', age:12};
addPerson(okeke)


enum Level {Basic, Medium, Advanced};

class Employee{
    
   public employeeName: string;
   private employeeAge: number;
   protected employeeLevel: Level

    constructor(name: string){
        this.employeeName =  name;
        this.employeeAge= 20;
        this.employeeLevel = Level.Advanced;
    }

    greet(){
        console.log("hello: ", this.employeeName)

    }
}

class Manager extends Employee {

    constructor(name: string){
        super(name)
    }

    assignTask(){
        console.log('Work is thus given to', this.employeeName)
    }
}

let manager1 = new Manager('Ekene');
manager1.assignTask();
manager1.greet();
console.log(manager1.employeeName)

//Protected class variables are accessible from classes that extended it
//Private is not accessible outside the class
//public is accessible everywhere