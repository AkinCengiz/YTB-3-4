//var - let - const

var firstname = "Akın";
console.log("Firstname : ",firstname);
firstname = 27;
console.log("Firstname : ",firstname);
firstname = true;
console.log("Firstname : ",firstname);

var age = 27;
console.log(age);

let lastname = "Cengiz";
console.log("Lastname :", lastname);
lastname = 34;
console.log("Lastname :", lastname);
lastname = false;
console.log("Lastname :", lastname);

const PI = 3.14;
console.log("PI : ",PI);
const fullname = "Akın CENGİZ";
console.log("Fullname : ",fullname);
// PI = 3;
// console.log("PI : ",PI);
// fullname = "Akın";
// console.log("Fullname : ",fullname);

const cities = ["İstanbul","İzmir","Sakarya","Erzurum"];
console.log('Cities', cities);
cities.push("Ankara");
console.log('Cities', cities);
cities[0] = "Adana";
console.log('Cities', cities);
const cities2 = ["Konya","Antalya","Mardin","Rize"];
cities = cities2;
console.log(cities);