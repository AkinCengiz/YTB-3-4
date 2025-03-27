const numbers = [1,2,3,4,5,6,7,8,9];
const cities = ["İstanbul","Edirne","Çanakkale","Kocaeli","Tekirdağ","Kırklareli"];

const number1 = numbers[0];
const number2 = numbers[1];
console.log(number1)
console.log(number2)

const [num1,num2,num3,num4,num5] = numbers;
console.log("Num1",num1)
console.log("Num2",num2)
console.log("Num3",num3)
console.log("Num4",num4)
console.log("Num5",num5)

const[ist,edi,cnk] = cities;
console.log("İst",ist);
console.log("Edi",edi);
console.log("Cnk",cnk);

const user = {
    firstname : "Akın",
    lastname : "Cengiz",
    email : "akincengiz@msn.com",
    city : "İstanbul",
    town : "Eyüp"
};

const { firstname, lastname,town } = user;

console.log(user.firstname);
console.log(firstname);

const { firstname:isim,lastname:soyisim,city:sehir} = user;
console.log("İsim : ",isim);
console.log("Soyisim :",soyisim);
console.log("Şehir : ",sehir)


//SPREAD OPERATÖRÜ

const [a,b,...numbers2] = numbers;//a=1,b=2,numbers2=[3,4,5,6,7,8,9]
console.log(numbers)
console.log(a)
console.log(b)
console.log(numbers2)

const [city1,city2,city3,...cities2] = cities;
console.log("cities1 : ",cities)
console.log("city1 : ",city1)
console.log("city2 : ",city2)
console.log("city3 : ",city3)
console.log("cities2 : ",cities2)


const {firstname:ad,lastname:soyad,...obj} = user;
console.log(user)
console.log(ad);
console.log(soyad);
console.log(obj);