const listItem = document.querySelector("#list");
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
    .then(data => {
        // data.forEach(item => {            
        //     listItem.innerHTML += `
        //     <li>${item.title} => Price : ${item.price}</li>
        //     `
        // });
        let dataInfons = data.filter(item => item.price < 50);
        dataInfons.forEach(item => {
            listItem.innerHTML += `
           <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `
        });
    })
    .catch(err => console.log(err))
}

getTextData("text.txt");
getTextData("text2.txt");

getJsonData("data.json");

getApiData("https://fakestoreapi.com/products");
// getApiData("https://jsonplaceholder.typicode.com/todos");
// getApiData("https://dummyjson.com/comments");
// getApiData("http://example.com/articles");

//https://fakestoreapi.com/products
//https://jsonplaceholder.typicode.com/todos
//https://dummyjson.com/comments
//http://example.com/articles