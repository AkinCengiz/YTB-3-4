class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFirstName(){
        console.log("Firstname : ",this.fistname);
    }
    getLastName(){
        console.log("Lastname : ",this.lastname);
    }
    getFullName(){
        console.log(`Fullname : ${this.fistname} ${this.lastname}`)
    }
    getInfo(){
        console.log(`Person Info\nFirstName\t: ${this.firstname}\nLastName\t: ${this.lastname}`);
    }
}

const person1 = new Person("Akın","Cengiz");
console.log(person1);

class Employee extends Person{
    constructor(firstname,lastname,salary){
        // this.fistname = firstname;
        // this.lastname = lastname;
        super(firstname,lastname);
        this.salary = salary
    }

    getSalary(){
        console.log("Salary : ",this.salary);
    }
    getInfo(){
        console.log(`Employee Info\nFirstName\t: ${this.firstname}\nLastName\t: ${this.lastname}\nSalary\t\t: ${this.salary}`);
    }
}

const employee1 = new Employee("Akın","Cengiz",4000);
employee1.getFirstName();
employee1.getLastName();
employee1.getFullName();
employee1.getSalary();
person1.getInfo();
employee1.getInfo();
console.log(employee1);