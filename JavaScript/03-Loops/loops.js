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
console.log("Total2 : ", total2);
console.log("Total3 : ", total3);