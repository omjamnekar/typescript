// Code goes here!
type Person = string | number;
const names: Array<Person> = ["flutter", "dart", 3];

// const names: string[] = ["flutter", "dart"];
console.log(names);


const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        if (true) {  // if 2000 ms is less than 1000 ms then it will reject
            reject("Something went wrong!");
        }
        resolve("This is done!");
    }, 2000);
});


function merge<T, U>(obja: T, obja2: U) {
    return Object.assign({}, obja, obja2);
}


const mergedObj = merge<{ names: string }, { age: number }>({ names: "flutter" }, { age: 3 });

console.log(mergedObj.names, mergedObj.age);



function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value:" + obj[key];
}


extractAndConvert({ name: "flutter" }, "name");




class Stroages<T> {

    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new Stroages<string>();
textStorage.addItem("flutter");
textStorage.addItem("dart");
textStorage.removeItem("flutter");
console.log(textStorage.getItems());


const numberStorage = new Stroages<number>();

numberStorage.addItem(3);
numberStorage.addItem(4);
numberStorage.removeItem(3);
console.log(numberStorage.getItems());

const objStorage = new Stroages<object>();

objStorage.addItem({ name: "flutter" });
objStorage.addItem({ name: "dart" });

objStorage.removeItem({ name: "flutter" });
console.log(objStorage.getItems());



interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function creatCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const namess: Readonly<String[]> = ["flutter", "dart"];

names.push("react");





