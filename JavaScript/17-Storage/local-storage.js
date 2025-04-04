// console.log(localStorage.getItem("cities"));
// console.log(typeof localStorage.getItem("cities"));

let cities = localStorage.getItem("cities");
console.log(cities);
console.log(typeof cities);
let text = '["İstanbul","Ankara","İzmir","Edirne","Çanakkale","Adıyaman","Antalya","                                      Diyarbakır                      ","Van"]';
console.log(text)
cities = JSON.parse(localStorage.getItem("cities"));
console.log(cities);
console.log(typeof cities);

console.log(localStorage.getItem("user"));

const user = {firstname : "Akın",lastname:"Cengiz",email : "akincengiz@msn.com"};
const names = ["Ahmet","Ayşenur","Büşra","Deniz","Derya"];

localStorage.setItem("user",user);
localStorage.setItem("names",names);

localStorage.setItem("user2",JSON.stringify(user));
localStorage.setItem("names2",JSON.stringify(names));

console.log(typeof JSON.parse(localStorage.getItem("user2")));

sessionStorage.setItem("user",JSON.stringify(user));
