# typescript
all my learning with typescript is avaiable in this repo

# TypeScript Learning Repository

This repository contains all the learning and examples I have accumulated while studying TypeScript. It serves as a personal reference and a helpful resource for others learning TypeScript.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Learning Notes](#learning-notes)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Description

This repository includes various TypeScript examples, notes, and exercises that cover a wide range of topics from basic types to advanced features. It is intended to be a comprehensive guide for anyone looking to understand and master TypeScript.

## Installation

To get started with the examples in this repository, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/typescript-learning-repo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd typescript-learning-repo
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To compile and run the TypeScript examples, follow these steps:

1. Compile the TypeScript code:
    ```bash
    tsc
    ```

2. Run the compiled JavaScript code:
    ```bash
    node dist/your-script.js
    ```

Alternatively, you can use `ts-node` to run TypeScript directly:

Basic Types
typescript
Copy code
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
Functions
typescript
Copy code
function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (x: number, y: number) => number = function (x, y) {
    return x + y;
};
Interfaces
typescript
Copy code
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "John", lastName: "Doe" };
console.log(greeter(user));
Classes
typescript
Copy code
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

let dog = new Animal("Dog");
dog.move(10);
Generics
typescript
Copy code
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
let outputNumber = identity<number>(100);
And many more...
Check out the src folder for more detailed examples and explanations.

Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact Information
If you have any questions or suggestions, feel free to contact me at your-email@example.com.

javascript
Copy code

Replace placeholders like `your-username`, `your-script.ts`, and `your-email@example.com` w

```bash
ts-node src/your-script.ts
