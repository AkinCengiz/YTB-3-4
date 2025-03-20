let number = -5;

let value = 90;


let result = Math.abs(number);
result = Math.cos(value);
result = Math.sin(value);



number = 3.55;

//FLOOR() => Sayıyı aşağı yuvarlar
result = Math.floor(number);
//CEIL() => Sayıyı yukarı yuvarlar
result = Math.ceil(number);
//ROUND() => Sayıyı en yakın tam sayıya yuvarlar.
result = Math.round(number);

//MAX() ve MIN() ==> Verilen parametrenin değerleri içerisinde min en küçük olanı max en büyük olanı döner
result = Math.max(3,7);
result = Math.min(3,7);
result = Math.min(3,7,5,12,36,34,2,85);
result = Math.max(3,7,5,12,36,34,2,85);
 const numbers = [3,7,5,12,36,34,2,85];
 const nmb = [4,107];
 const nmb2 = [96,127];
 result = Math.max(...numbers,...nmb,...nmb2);

console.log("Result : ", result);

//POW() => pow(a,b) ilk parametre ile verilen değerin ikinci parametredeki değer kadar üssünü döner a^b

result = Math.pow(3,4);
result = Math.pow(4,4);

//SQRT() => Parametre olarak verilen değerin karekökünü hesaplar
result = Math.sqrt(81);
console.log("Result : ", result);

//RANDOM() => 
result = Math.random();
console.log("Result : ", result);
result = Math.floor(result * 100);
console.log("Result : ", result);

console.log(Math.floor(Math.random()*1000));
