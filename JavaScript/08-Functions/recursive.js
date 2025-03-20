function factorial(number){
    if(number <= 1){
        return 1;
    }
    return number * factorial(number-1);
}

const arrowFactorial = (number) => {
    if(number <= 1){
        return 1; 
    }
    return number * arrowFactorial(number - 1);
}

console.log("Faktoriyel : ", factorial(4));
console.log("Arrow Faktoriyel : ", arrowFactorial(4));""

//Total değişkeni tanımlayıp değeri 0 a eşitleyin.
// Fonksiyon oluşturun ve bu fonksiyon parametre olarak verilen değeri ile total değişkenine ekleyerek total değişkenini güncellesin

let total = 0;

const add = (total, number) => {
    total += number;
    return total;
}

const topla = (a,b) => a+b;

total = add(total,15);
console.log("Total : ",total);
total = 0;
total = topla(total, 15);
console.log("Total : ",total);
total = add(total,15);
console.log("Total : ",total);