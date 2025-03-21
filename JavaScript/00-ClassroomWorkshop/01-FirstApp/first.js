/**
 * 1 - Html sayfasında öncelikle container div oluşturulacak.
 * 
 * 2 - Kişisel bilgilerinizi tutan bir obje ve şehirleri tutan bir dizi tanımlanacak
 * 
 * 3 - Şehirler dizisini ve kişisel bilgileri tutacak iki ayrı div oluşturulacak
 * 
 * 4 - Her iki divden şehirleri tutan div içerisine h2 ile Şehir Listesi ve kişisel bilgileri tutan div içerisine h2 ile Kişisel Bilgileryazılacak. 
 * 
 * 5 - Dizileri tutan div içerisine ul tnımlanarak bu ul ile şehirler dizisinin elemanları ekranda gösterilecek.
 * 
 * 6 - Kişisel bilgileri tutan obje (for-in ya da for-of) uygun olan döngü kullanılarak ul içerisinde bir liste olarak key:value çifti olarak gösterilecek.
 * 
 */
const cities = ["İstanbul","Çanakkale","İzmir","Edirne","Sakarya","Ankara","Antalya"];

const myInfo = {
    firstname : "Akın",
    lastname : "Cengiz",
    email : "akincengiz@msn.com",
    city : "İstanbul",
    town : "Eyüp"
}

const body = document.querySelector("#body");
const container = document.createElement("div");
body.appendChild(container);

const cityBox = document.createElement("div");
cityBox.className = "city-box";
const cityList = document.createElement("ul");
cityList.style.listStyleType = "none";
cities.forEach((item) => {
    const cityItem = document.createElement("li");
    
    cityItem.innerText = item;
    cityList.appendChild(cityItem);
})
cityBox.appendChild(cityList);
container.appendChild(cityBox);


const myInfoBox = document.createElement("div");
const infoList = document.createElement("ul");
for(let info in myInfo){
    const infoItem = document.createElement("li");
    infoItem.className = "list-item";
    infoItem.innerText = `${info} : ${myInfo[info]}`;
    infoList.appendChild(infoItem);
}
myInfoBox.appendChild(infoList);
container.appendChild(myInfoBox);


const infoCard = document.createElement("div");
infoCard.innerHTML = `
<h1 class="header-text">String Template Literal</h1>
<ul>
    <li class="list-item">${myInfo.firstname}</li>
    <li class="list-item">${myInfo.lastname}</li>
    <li class="list-item">${myInfo.email}</li>
    <li class="list-item">${myInfo.city}</li>
    <li class="list-item">${myInfo.town}</li>
</ul>
    
`;
container.appendChild(infoCard);
