const numbers = [1,23,5,17,19,13,9,8,6,14,7,16,4,21];
const cities = ["İstanbul","Ankara","Sakarya","Eskişehir","Şanlıurfa","Edirne","Çanakkale"];
let users = [
    {firstname:"Akın", lastname:"Cengiz",isActive:false },
    {firstname:"Ahmet", lastname:"Ulusoy",isActive:true },
    {firstname:"Berfin", lastname:"Tatar",isActive:true },
    {firstname:"Berkay", lastname:"Kaya",isActive:false },
    {firstname:"Ebru", lastname:"Alacagöz",isActive:false },
    {firstname:"Elif", lastname:"Sinecen",isActive:true }
]

const evenlyNumbers = numbers.filter(number => number % 2 == 0);
//console.log(numbers);
//console.log(evenlyNumbers);

const trueUsers = users.filter((user) => user.isActive == true);


const falseUsers = users.filter(user => user.isActive == false);

const activeElement = document.getElementById("active");
activeElement.style.padding = "5px";
activeElement.innerHTML = "<h1>Active Users</h1>"
const passiveElement = document.querySelector("#passive");
passiveElement.style.padding = "5px";
passiveElement.innerHTML = "<h1>Passive Users</h1>"

trueUsers.map(user => {
    activeElement.innerHTML += `<p>Fullname : ${user.firstname} ${user.lastname} </p>`
});

falseUsers.map(user => {
    const pElement = document.createElement("p");
    pElement.innerText = `Fullname : ${user.firstname} ${user.lastname}`;
    passiveElement.appendChild(pElement);
})




console.log(users)


users = users.filter(user => user.firstname !== "Akın");
console.log(users);

// console.log(users);
// console.log("True : ", trueUsers);
// console.log("False : ", falseUsers);