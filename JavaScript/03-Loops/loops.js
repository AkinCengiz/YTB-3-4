//FOR DÖNGÜSÜ

// for(let i = 100; i >= 100; i++){
//     console.log(i);
// }

let total = 0;
for(let i = 1; i <= 20; i++){
    total += i;
    console.log("Total : ", total);
}

let total2 = 0;
let total3 = 0;

for(let i = 5; i<=100;i++){
    if(i % 5 == 0){
        total2 += i;
    }
}

for(let i = 5; i <= 100; i+=5){
    total3 += i;
}

let i = 0;
for(;i < 5;){
    console.log("i : ", i);
    i++;
}
console.log("Total2 : ", total2);
console.log("Total3 : ", total3);

//WHILE
let index = 0;
while ( index < 10 ) {
    console.log("Index : ",index);
    index++
}

let toplam = 0;
let start = 0;

while(start < 15){
    toplam += start;
    console.log("Toplam :",toplam)
    start++;
}
let x=0;
for(;x < 5;){
    console.log("x : ", x);
    x++;
}

//for(;;){}

let deneme = 5;

do{
    console.log("Do While Döngüsü : ",deneme);
    deneme++;
}while(deneme < 10)

deneme = 5;
for(;deneme < 10;){
    console.log("For Döngüsü : ",deneme);
    deneme++;
}

deneme = 5;
while(deneme < 10){
    console.log("While Döngüsü : ",deneme);
    deneme++;
}