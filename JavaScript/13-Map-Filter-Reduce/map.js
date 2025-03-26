const numbers = [1,23,5,17,19,13,9,8,6,14,7,16,4,21];
const cities = ["İstanbul","Ankara","Sakarya","Eskişehir","Şanlıurfa","Edirne","Çanakkale"];
const users = [
    {firstname:"Akın", lastname:"Cengiz",isActive:false },
    {firstname:"Ahmet", lastname:"Ulusoy",isActive:true },
    {firstname:"Berfin", lastname:"Tatar",isActive:true },
    {firstname:"Berkay", lastname:"Kaya",isActive:false },
    {firstname:"Ebru", lastname:"Alacagöz",isActive:false },
    {firstname:"Elif", lastname:"Sinecen",isActive:true }
]
//const bodyElement = document.getElementsByTagName("body")[0];
const bodyElement = document.getElementById("body");

console.log(bodyElement)
const numbersTitle = document.createElement("h2");
const numberList = document.createElement("ul");
numbersTitle.innerText = "Numbers Array"
numberList.appendChild(numbersTitle);
bodyElement.appendChild(numberList);


const mapArray = numbers.map(number => {
    return number ** 2;
});

const eachArray = numbers.forEach(number => {
    return number * 2;
})
numbers.forEach(number => {
    console.log("ForEach : ",number * 2);
})

numbers.map((number,index) => {
    numberList.innerHTML += `
        <li key=${index}>${index + 1}. eleman : ${number}</li>
    `
})

numbers.forEach((number,index) => {
    numberList.innerHTML += `
        <li key=${index}>${index + 1}. eleman : ${number}</li>
    `
})

const newUsers = users.map(user => {
    return { firstname : user.firstname, lastname : user.lastname, isActive:true};
})

console.log(numbers);
console.log(mapArray);
console.log(eachArray);
console.log(users);
console.log(newUsers);