function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.getName = function(){
    console.log("Get Name : ",this.firstname);
}
Person.prototype.getInfo = function(){
    console.log(`Firstname : ${this.firstname}\nLastname : ${this.lastname}`)
}
const per1 = new Person("sdsa","ddfdf");
console.log(per1);
per1.getInfo();

function Employee(firstname,lastname,salary){
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.getSalary = function(){
    console.log("Salary : ",this.salary);
}
Employee.prototype.getName = function(){
    console.log("Get FirstName : ",this.firstname);
}

const employee = new Employee("Akın","Cengiz",4000);
console.log(employee);
employee.getInfo();
employee.getSalary();
employee.getName();