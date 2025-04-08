// const cities = ["İstanbul","İzmir","Ankara"];
// let name = "Akın";

// console.log(cities);
// console.log(name);

const express = require("express");

const products = [
    {name : "Laptop", price : 15000, stock : 7},
    {name : "Desktop", price : 13000, stock : 8},
    {name : "Cep Telefonu", price : 11000, stock : 17}
];

const cities = ["İstanbul","İzmir","Ankara","Malatya"];
const app = express();

const port = 8080;


//TARAYICIMIN ADRES ÇUBUĞUNA 
//localhost:8080/products
app.get("/products",(request,response)=> {
    response.json(products);
});

app.get("/cities",(request,response) => {
    response.json(cities);
})

const numbers = [1,2,3,4,5,6,7,8,9];
app.get("/numbers",(request,response)=> {
    response.json(numbers);
})
console.log("deneme");
app.listen(port,() => {
    console.log(`Sunucu ${port} üzerinden yayında...`);
})