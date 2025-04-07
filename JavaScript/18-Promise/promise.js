function getData(info){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(info % 2 == 0){
                resolve(info);
            }else{
                reject(new Error("Çift sayı girmelisiniz..."));
            }
        },3000);
        //reject(info);
    })
}

//  console.log(getData("Yetenek Başakşehir")) ;
//console.log(getData(14)) ;
//console.log(getData(13)) ;

//getData(8).then(response => console.log(response)).catch(err => console.log(err));
//getData(9).then(response => console.log(response)).catch(err => console.log(err));

function calculate(number){
    return new Promise((resolve,reject) => {
        if(typeof number === "number"){
            resolve(number ** 2);
        }else{
            reject(new Error());
        }
    })
}

//console.log(calculate(3));
//console.log(calculate("Yetenek Başakşehir"));
// calculate(3)
// .then(res => res)
// .then(data => data ** 2)
// .then(response => Math.sqrt(response))
// .then(res => console.log(res))
// .catch(err => console.error(err));


calculate(2)
.then(res => {
    console.log("İlk then bloğu : ", res);//res => 4
    return res ** 3;
}).then(res => {
    console.log("İkinci then Bloğu : ",res);//res => 64
    return Math.sqrt(res);
}).then(res => {
    console.log("Üçüncü then bloğu : ", res)//res => 8
    return res * 2;
}).then(res => {
    console.log("Dördüncü then bloğu : ", res);//res => 16
    return res;
}).catch(err => console.error("Catch Bloğu : ", err));