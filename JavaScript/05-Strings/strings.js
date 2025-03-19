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