const cities = ["İstanbul","Çanakkale","İzmir","Edirne","Sakarya","Ankara","Antalya"];

for(let city of cities){
    console.log(city);
}

for(let city in cities){
    console.log(city)
}

for(let city in cities){
    console.log(`cities[${city}] = ${cities[city]}`);
}

const user = {
    firstname : "Akın",
    lastname : "Cengiz",
    city : "İstanbul",
    town : "Eyüp"
}
console.log(user["firstname"]);

//for-of yapısı objeler ile kullanılamaz
// for(let info of user){
//     console.log(info)
// }

for(let info in user){
    console.log(info,user[info]);
}

