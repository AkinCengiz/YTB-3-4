const numbers = [2,3,5,7,11];
const cities = ["İstanbul", "İzmir","Ankara","Çanakkale"];
const mixed = [1,2,3,"Ankara",true,15.7,"Türkiye",false,["Akın",true,11],{firstname : "Akın", lastname : "Cengiz"}];

console.log(numbers);
console.log(cities);
console.log(mixed);

console.log(numbers[3]);
console.log(mixed[8]);
console.log(mixed[9]);

//DİZİ METOTLARI
//push() => Dizinin sonuna parametre olarak verilen elemanı ekler

numbers.push(6);
numbers.push(8);
let nmbr = numbers.push(23);
console.log("**********************")
console.log(nmbr);
console.log(numbers);

//pop() => Dizinin son elemanını siler.
mixed.pop();
console.log(mixed);
console.log(mixed.pop());
console.log(mixed);

let number1 = numbers.pop();

console.log(numbers);
console.log("Number : ",number1);

// shift() => Dizinin ilk elemanını siler.
let firstItem = mixed.shift();
console.log(mixed);
console.log("First Item : ", firstItem);

//unshift() => Parametre olarak verilen değeri dizinin ilk elemanı olarak ekler
console.log(cities); 
cities.unshift("Erzurum","Konya");
let city = cities.unshift("Edirne");
console.log(cities); 
console.log("City : ",city);

//JAVASCRIPT DEĞİL C# KODU
// int toplam = Topla(5,4);

// public int Topla (int x, int y){
//     return x + y;
// }

// public void Toplam (int x, int y){
//     console.log(x+y);
// }

//slice() => Eğer tek parametre ile kullanılırsa dizinin belirtilen index değerinden başlayarak dizinin sonuna kadar olan elemanları döner. Eğer iki parametre ile kullanılırsa dizinin ilk parametre ile belirtilen indexinden başlayarak ikinci parametrede belirtilen indexe kadar olan (2. parametredeki index dahil değil) elemanları kopyalayarak döner.

const cities2 = cities.slice(4);
console.log(cities);
console.log("(4)",cities2);

const cities3 = cities.slice(2,5);
console.log(cities);
console.log("(2,5)",cities3);

// reverse() => Dizinin elemanları ters çevirir. Dizinin elemanları artık ters sıradadır.
console.log(cities)
console.log(cities.reverse());
console.log(cities)

//concat() => dizinin sonuna parametre olarak verilen diziyi ekler
console.log("CONCAT METODU")
const newArray = cities.concat(numbers);

console.log(cities);
console.log(numbers);
console.log(newArray);
console.log(numbers.concat(cities));
const title = document.getElementById("title");
title.innerText = cities[0];

//indexOf() => Dizi içerisinde parametrede gönderilen değerin olup olmadığını kontrol eder. Eğer varsa elemanın bulunduğu index değerini eğer yoksa -1 değerini döner.
console.log("INDEXOF")
console.log(numbers)
console.log("indexOf : ",numbers.indexOf(7));
console.log("indexOf : ",numbers.indexOf(17));

console.log(cities)
console.log("indexOf : ",cities.indexOf("Konya"));
console.log("indexOf : ",cities.indexOf("Antalya"));

//lastIndexOf() => Dizi içerisinde parametrede gönderilen değerin olup olmadığını kontrol eder. Eğer varsa elemanın bulunduğu son index değerini eğer yoksa -1 değerini döner.
console.log("LASTINDEXOF")
const newNumber = [ 1,2,3,4,5,15,8,41,67,72,15,8,34,22,17,41,67,2,8,34,22];
console.log(newNumber);
console.log(newNumber.indexOf(22));
console.log(newNumber.lastIndexOf(22));


let result = newNumber.join();
console.log(result, typeof result);

let names = ["Akın","Cengiz","İstanbul","Kemerburgaz"];
let info = names.join();
console.log(names);
console.log(info);

result = newNumber.join("-")
console.log(result, typeof result);
info = names.join(" * ");
console.log(info)

const sortArray = newNumber.sort();
console.log(newNumber);
console.log(sortArray);

const sortNames = ["Akın","Ahmet","Atakan","Ayşe","Altan","Ali","Alin"];
sortNames.sort();
console.log(sortNames);

console.log(sortArray);
//sortArray = [ 1,2,3,4,5,15,8,41,67,72,15,8,34,22,17,41,67,2,8,34,22];
//Küçükten Büyüğe Sıralama
sortArray.sort(function(small,big){
    return small - big;
})
//sortArray.sort((small,big) => small - big);
console.log(sortArray);
//Büyükten küçüğe Sıralama
sortArray.sort(function(small,big){
    return big - small;
})
//sortArray.sort((small,big) => big - small);
console.log(sortArray);
//sortArray.sort((a,b) => b-a);
//console.log(sortArray);