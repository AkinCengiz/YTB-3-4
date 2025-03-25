//JSON Dosya üzerindden veri çekmek
console.log("Dosya Üzerinden Veri Çekildi")
fetch("./data.json")
.then(response => response.json())
.then(data => console.log(data.myInfo));

//URL Endpoint (WebApi) üzerinden veri çekmek
console.log("Web Api Üzerinden Veri Çekildi.")
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => console.log(data));

fetch("https://northwind.now.sh/api/products")
.then(res => res.json()).then(data => console.log(data));