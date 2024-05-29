
function Logger(loading: string) {

    return function (constructor: Function) {
        console.log(loading);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('Template Factory');
    return function <T extends { new(..._: any[]): { name: string } }>(originalConstructor: T) {

        return class extends originalConstructor {
            constructor(...args: any[]) { // Add a single rest parameter of type 'any[]'
                super(...args); // Call the super constructor with the rest parameter
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                // const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}


@Logger("ommmmmmmmmmmm")
@WithTemplate("<h1>My Person Object</h1>", "app")
class PersonPage {
    name = "om";



    constructor() {
        console.log('Person class constructor');
    }
}


const pers = new PersonPage();

console.log(pers.name);


//-------------

function Log(target: any, property: string | number) {
    console.log('Property decorator!');
    console.log(target, property);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}


function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);

}

class Product {
    @Log
    title: string;
    _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    };

    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }


}

function Autobind(_: any, _2: string, description: PropertyDescriptor) {
    const originalMethod = description.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }

    };

    return adjDescriptor;
}

class Printer {
    message = 'This works!';
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener('click', p.showMessage);

//----

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]
    }
}


const registeredValidators: ValidatorConfig = {};

function Required(target: any, propoName: string) {
    registeredValidators[target.constructor.name] = {

        ...registeredValidators[target.constructor.name] = {
            [propoName]: ['required']
        }
    }
}



function PositiveNumber(target: any, propoName: string) {
    registeredValidators[target.constructor.name] = {

        ...registeredValidators[target.constructor.name] = {

            [propoName]: ['positive']
        }
    }
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objectValidatorConfig) {
        return true;

    }

    let isValid = true;
    for (const prop in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                case 'positive':
                    isValid = isValid && obj[prop] > 0;

            }
        }
    }
    return isValid;
}

class Course {

    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

    // @Log3
    // getPriceWithTax(@Log4 tax: number) {
    //     return this.price * (1 + tax);
    // }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;


    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {

        console.log(createdCourse);
    }

});