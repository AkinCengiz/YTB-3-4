function getData(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Metot çalıştı");
        }, 3000);
    })
    let result = promise;
    return result;
}

//getData().then(res => console.log(res)).catch(err => console.log(err));

async function getDataAsync(number){
    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            if(number % 2 == 0){
                resolve(number)
            }else{
                reject(new Error)
            }
        },3000)
    });
    let result = await promise;
    return result;
}

//getDataAsync(1).then(res => console.log(res)).catch(err => console.log(err));

 async function getApiData(url) {
    let newArray;
    const response = await fetch(url);
    const data =  await response.json();
    newArray= data;
    //newArray = data;
    console.log(newArray);

  }

  getApiData("https://fakestoreapi.com/products");