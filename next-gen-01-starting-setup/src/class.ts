class Department {

    // private name: string;
    private employees: string[] = [];
    constructor(private readonly id: string, private name: string = "Default") {
        // Remove the unused 'n' parameter
        this.name = name;
        console.log(this.id, this.name);
    }

    describe(this: Department) {
        console.log('Department: ' + this.name, this.id);
    }



    addEmployee(employee: string) {
        console.log('Department: ' + this.employees.push(employee) + ' Employee: ' + employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);

    }

}



const sd = new Department("id", 'Accounting');   // this will not work because we have not exported the class
console.log(sd);


class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');

        this.admins = admins;
    }
}



const ssdd = new ITDepartment("id", ['Accounting']);   // this will not work because we have not exported the class
console.log(sd);
