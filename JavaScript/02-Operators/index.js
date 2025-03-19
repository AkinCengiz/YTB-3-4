//ARİTMETİK OPERATORS
//(+) => Toplama
//(-) => Çıkarma
//(/) => Bölme
//(*) => Çarpma
//(%) => Mod Alma

// (++) => Bir arttırma
//(--) => Bir azaltma

//(+=) => Topla Ata
//(-=) => Çıkar Ata
//(/=) => Böl Ata
//(*=) => Çarp Ata
//(%=) => Mod Al Ata

let number1 = 13;
let result = number1 + 2;

result = number1 - 6;
result = number1 * 5;
result = number1 / 2;
result = number1 % 5;
//console.log(result)

let number2 = 23;
result = number2++;

result = ++number2;

result = number2--;
result = --number2;

//result = result + 5;
result += 5;

//result = result - 7;
result -= 7;


//result = result / 3;
result /= 3;

//result = result * 13;
result *= 13;

// result = result % 8;
result %= 8;


//console.log("Result : ",result)
//console.log("Number2 : ",number2)

///////////////////////////////////////////////
//KARŞILAŞTIRMA OPERATÖRLERİ
// (<) => Küçüktür
// (>) => Büyüktür
// (<=) => Küçük eşit
// (>=) => Büyük Eşit
// (==) => Eşittir (Değer kontrolü)
// (===) => Eşittir (Tür de değer kontrolü)
// (!=) => Eşit Değil


let small = 7;
let small2 = "7";
let big = 11;

result = small < big;
result = big < small;
result = small > big;
result = big > small;
result = small <= big;
result = big >= small;

result = small == big;
result = small == 7;
result = small == "7";

result = small === 7;
result = small === "7";

result = small != big;
result = small != 7;

// console.log(small, typeof small);

// console.log("Result : ", result);

//MANTIKSAL OPERATÖRLER
// (&) => VE
// (&&) => MANTIKSAL VE
// (|) => Ya Da (Veya)
// (||) => Mantıksal Ya Da (Veya)

let age = 13;

if(age >= 18 && age< 35){
    console.log("18 ile 35 arasında")
}

if(age < 18 || age >= 35){
    console.log("18 ile 35 arasında değil")
}
