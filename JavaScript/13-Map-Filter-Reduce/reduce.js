const numbers = [1,23,5,17,19,13,9,8,6,14,7,16,4,21];

const bigTenNumbers = numbers.reduce((previusValue,currentValue)=> {
    if(currentValue >= 10){
        previusValue++;
    }
    return previusValue;
},0)

console.log(numbers);
console.log(bigTenNumbers);

let employees = [
    {firstname:"Akın", lastname:"Cengiz",isActive:false,salary : 4000 },
    {firstname:"Ahmet", lastname:"Ulusoy",isActive:true,salary : 5000 },
    {firstname:"Berfin", lastname:"Tatar",isActive:true,salary : 6000 },
    {firstname:"Ali", lastname:"Can",isActive:true,salary : 6000 },
    {firstname:"Berkay", lastname:"Kaya",isActive:false,salary : 4500 },
    {firstname:"Ebru", lastname:"Alacagöz",isActive:false,salary : 4700 },
    {firstname:"Elif", lastname:"Sinecen",isActive:true,salary : 5200 }
]

const totalSalary = employees.reduce((total,employee)=> {
    if(employee.isActive){
        total += employee.salary;
    }
    return total;
},10000);

const falseSalary = employees.reduce((total,employee) => {
    if(!employee.isActive){
        total += employee.salary;
    }
    return total;
},0)

const activeEmployeeCount = employees.reduce((count,employee) => {
    if(employee.isActive){
        count++;
    }
    return count
},0);

console.log(employees);
console.log(totalSalary);
console.log(falseSalary);
console.log("Aktif Çalışan : ", activeEmployeeCount);

