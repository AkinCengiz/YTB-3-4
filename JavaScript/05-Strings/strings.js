let content = "You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea could be expressed this way as a loop:";
let text = "You can think";

let result = text.length;
console.log("Result : ",result)

result = content.indexOf('i');
result = content.length;
console.log("Result : ",result)
result = content.lastIndexOf('p');
console.log("Result : ",result);
//toUpperCase() => Metnin tüm karakterlerini büyük harfe çevirir
console.log(content.toUpperCase());
//toLowerCase() => Metnin tüm karakterlerini küçük harfe çevirir
console.log(content.toLocaleLowerCase());

const list = content.split(" ");
console.log(list);

text = "Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar";
console.log(text);
const days = text.split(", ");
console.log(days);

let firstname = "Akın";
let lastname = "Cengiz";
let email = "akincengiz@msn.com";

let info = "Merhaba ben " +firstname + " " + lastname + ", email adresim " + email;
console.log("Info : ", info); 

//TEMPLATE LITERAL
// `` => AltGr + , tuşlarına birlikte basarak elde ediyoruz.

let content2 = "You can think of a loop"+firstname+ " " + lastname + " as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea could be expressed this way as a loop:";

let info2 = `Merhaba, ben ${firstname} ${lastname}. Email adresim ${email}. Sayı 1 = 13 ve sayı 2 = 17 ise Toplam = ${13+17}`;
console.log("Info 2 : ", info2);

console.log(text);

let deneme = text.replace(',','-');
console.log(deneme)
deneme = deneme.replaceAll(",","-");
console.log(deneme)
deneme = deneme.replace("Pazar","Deneme");
console.log(deneme)
deneme = deneme.replaceAll("Cuma","Deneme");
console.log(deneme)

//padStart() => 
    
    console.log("Adı".padEnd(10,"*"),":",firstname);
    console.log("Soyadı".padEnd(10," "),":",lastname);
    console.log(firstname.padStart(10,"*"));
    console.log(lastname.padStart(10," "));

    console.log(info2);

    let subInfo = info2.substring(5,14);
    console.log(subInfo);

    let varMi = info2.includes("Akın");
    console.log(varMi);