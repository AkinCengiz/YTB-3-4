function getTextData(fileUrl){
    fetch(fileUrl)//TXT Dosyasına istek attık
    .then(response => response.text())//Dosyadan gelen cevabı(response) text() metodu ile texte çevirdik
    .then(data => console.log(data))//Text metodu ile gelen veriyi aldık ve console yazdık
    .catch(err => console.log(err))
}

function getJsonData(fileUrl){
    fetch(fileUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}

function getApiData(url){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getTextData("text.txt");
getTextData("text2.txt");

getJsonData("data.json");

//https://fakestoreapi.com/products
//https://jsonplaceholder.typicode.com/todos
//https://dummyjson.com/comments
//http://example.com/articles