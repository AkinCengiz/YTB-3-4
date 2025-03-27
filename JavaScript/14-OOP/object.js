const user1 = {
    firstname:"Akın",
    lastname : "Cengiz",
    email : "asd@asd.com",
    getname : function(){
        console.log(this.firstname);
    }
}


// const user2 = {
//     firstname : "Ali",
//     lastname : "Cengiz",
//     email : "ali@asd.com",
//     getname : function(){
//         console.log(this.firstname);
//     }
// }

// const user3 = {
//     firstname : "Ali",
//     lastname : "Cengiz",
//     email : "ali@asd.com",
//     getname : function(){
//         console.log(this.firstname);
//     }
// }

// console.log(user1);
// console.log(user2.email)
// user3.getname();

function Person(ad,soyad){
    this.firstname = ad;
    this.lastname = soyad;
    
    this.getFirstName = function(){
        console.log(this.firstname);
    }
    this.getLastName = function(){
        console.log(this.lastname);
    }
    this.toString = function(){
        console.log("En İçte bulunan ToString")
    }
}
Person.prototype.getFullName = function(){
    console.log(this.firstname,this.lastname)
}
Person.prototype.toString = function(){
    console.log("Person prototype ToString Metodu")
}

const person1 = new Person("Akın","Cengiz");
const person2 = new Person("Ali","Kaya");
console.log(person1);
console.log(person2);
console.log(user1);
person1.getFullName();
person2.getFullName();
person1.getFirstName();
person2.getLastName();
person1.toString();

function Employee(salary){
    this.salary = salary
}

const employee = new Employee(2500);
console.log(employee);
console.log(employee.toString());