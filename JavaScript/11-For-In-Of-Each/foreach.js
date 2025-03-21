const cities = ["İstanbul","Çanakkale","İzmir","Edirne","Sakarya","Ankara","Antalya"];

cities.forEach((city) => {
    console.log(city)
});

cities.forEach((item,index)=> {
    console.log(`cities[${index}] : ${item}`);
});

cities.forEach(function(item){
    console.log(item);
})