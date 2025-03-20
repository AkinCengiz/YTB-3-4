let now = new Date();
console.log("Now : ", now);

let bugun = new Date(2025, 2, 20, 11, 0, 52, 450);
console.log("Bugün : ", bugun);

console.log(bugun.getDay());

let day = bugun.getDay();

switch (day) {
  case 0:
    console.log("Pazar");
    break;
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  case 4:
    console.log("Perşembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  default:
    break;
}

//GET NETOTLARI => Sırasıyla Yıl, Ay, Gün, Saat, Dakika, Saniye ve Milisaniye bilgisini döner
let result = now.getFullYear();
result = now.getMonth();
result = now.getDate();
result = now.getHours();
result = now.getMinutes();
result = now.getSeconds();
result = now.getMilliseconds();

//SET METOTLARI Sırasıyla Yıl, Ay, Gün, Saat, Dakika, Saniye ve Milisaniye bilgilerine değer atar

now.setFullYear(2020);
now.setMonth(7);
now.setDate(10);
now.setHours(21);
now.setMinutes(23);
now.setSeconds(52);
now.setMilliseconds(365);


result = now;

console.log("Result : ", result);
 bugun = new Date();

 //toDateString() => Tarih bilgisini döner
 console.log(bugun.toDateString());
 //toTimeString() => Saat bilgisini döner
 console.log(bugun.toTimeString());
 
 //toDateString() => Tarih bilgisini döner
 console.log(bugun.toLocaleDateString());
 //toTimeString() => Saat bilgisini döner
 console.log(bugun.toLocaleTimeString());