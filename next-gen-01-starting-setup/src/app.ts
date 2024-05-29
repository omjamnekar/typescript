// // Code goes here!
// const userName = "Max";
// // userName = "om";

// let age = 30;
// age = 29;


const add = (a: number, b: number = 1) => a + b;


console.log(add(2, 5));


const printOutput: (a: number | string, b: string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener("click", event => console.log(event));
}
const add2 = (a: number, b: number = 1) => a + b;

add2(5);

printOutput(add(5), add2(5).toString());

// const hobbies: Map<number, string> = { 1: 'Sports' };


// hobbies.push('Reading');
// console.log(hobbies);


const persion = {
    name: "max;",
    age: 30,

}

const conic = { ...persion };



const ads = (...number: number[]) => {

    return number.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}
const add3Number = ads(2, 3, 4, 5);




const hobby1 = ['Sports', 'Cooking'];
const activeHobbies = hobby1[1];
console.log(activeHobbies);
const [hobbie1s, hobbies3] = hobby1;



interface Greetable {

    name: string;
    age: number;


    greet(phrase: string): void;


}

class Person implements Greetable {

    age: number = 20;
    name: string = 'Max';


    constructor(n: string) {
        if (n) {

            this.name = n;
        }
    }

    greet(_phrase: string): void {
        console.log("Hello! ");
    }
}

interface Named {
    readonly name: string;


}

interface Greetable extends Named {
    greet(phrase: string): void;
}


let user1: Greetable;

user1 = new Person("Max");
user1.greet("Hello");
// user1
// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }


type AddFn = (a: number, b: number) => number;

var adde: AddFn = (a, b) => a + b;

console.log(adde(2, 3));

interface AddFn2 {
    (a: number, b: number): number;
}

interface Named {
    readonly name: string;
    outputName?: string;
}

// intersaction type
/////////////////////////////////////////////////////////////

type Admin = {
    name: string;
    privileges: string[];

};


// or interface
type Employee = {
    name: string;
    startDate: Date;
};


type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;

type Numaric = number | boolean;

type Universal = Combinable & Numaric;

const adsd: Universal = 3;


// type guards  
///////////////////////////////////////////////////////////////

function ad2d(a: Combinable, b: Combinable): Combinable {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;


function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}