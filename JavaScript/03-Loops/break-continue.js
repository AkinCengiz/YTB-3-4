//BREAK & CONTINUE



let total = 0;
let start = 0;

while(start <= 100){
    if(start % 5 !== 0){
        console.log("Start : ",start);
    }    
    start++;
}

for(let i = 1; i < 100; i++){
    if(i % 3 == 0 & i % 5 == 0){
        console.log("Sayı 15 e bölünür : ",i);
        continue;
    }
    if(i % 7 == 0 ){
        console.log("Sayı 7 e bölünür : ",i)
        continue;
    }
    if(i % 17 == 0 && i % 3 == 0){
        console.log("Son iterasyon : ", i);
        break;
    }
    console.log("Sayı : ", i);
}

for(let i = 14; i > 0; i++ ){
    if(i % 13 == 0){
        console.log("Döngü sonu");
        break;
    }
    console.log("I : ",i);
}
let value = 5;
while(true){
    if( value == 15 ){
        console.log("Döngü bitti => ",value);
        break;
    }
    value++;
}