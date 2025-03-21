//Element Seçiciler

//getElementsByTagName() => Html dökümanında bulunan istenilen element etiket türündeki tüm elementleri dizi olarak verir.

const pElements = document.getElementsByTagName("p");
const liElements = document.getElementsByTagName("li");
console.log(pElements);
console.log(liElements);

//getElementsByClassName() => Html dökümanında bulunan istenilen class ismine sahip classı olan tüm elementleri dizi olarak verir.

const menuItems = document.getElementsByClassName("menu-item");
console.log(menuItems);

//getElementById() => Belirtilen id değerine sahip olan elementi döner

const titleElement = document.getElementById("title");
console.log(titleElement);
const description = document.getElementById("description");
console.log(description);

//querySelector() => 
    console.log("************QUERY SELECTOR**********")
    let navList = document.querySelector(".nav-item");
    let nav1 = document.querySelector("#nav-1");
    /**
     * <ul id="menu" class="menu">
            <li class="nav-item" id="nav-1">Html</li>
            <li class="nav-item" id="nav-2">Css</li>
            <li class="nav-item" id="nav-3">JavaScript</li>
            <li class="nav-item" id="nav-4">React</li>
            <li class="nav-item" id="nav-5">CSharp</li>
        </ul>
     */
    console.log(navList);
    console.log(nav1);
//querySelector() => 
    console.log("************QUERY SELECTOR ALL**********")
    navList = document.querySelectorAll(".nav-item");
    nav1 = document.querySelectorAll("#nav-1");
    /**
     * <ul id="menu" class="menu">
            <li class="nav-item" id="nav-1">Html</li>
            <li class="nav-item" id="nav-2">Css</li>
            <li class="nav-item" id="nav-3">JavaScript</li>
            <li class="nav-item" id="nav-4">React</li>
            <li class="nav-item" id="nav-5">CSharp</li>
        </ul>
     */
    const paragraph = document.querySelectorAll("p");
    const liItems = document.querySelectorAll("li");
    console.log(navList);
    console.log(nav1);
    console.log(paragraph);
    console.log(liItems);

    const secondElement = document.querySelector("#second");
    
    const pageTitle = document.createElement("h1");
    pageTitle.innerText = "Eklediğimiz Başlık";
    secondElement.appendChild(pageTitle);
    const addedParagraph = document.createElement("p");
    addedParagraph.innerHTML = "<strong>Bu bizim eklediğimiz paragraf.</strong>";
    secondElement.appendChild(addedParagraph);



    const divElement = document.createElement("div");
    const ulElement = document.createElement("ul");
    ulElement.innerHTML = `
    <li>Birinci Madde</li>
    <li>İkinci Madde</li>
    <li>Üçüncü Madde</li>
    `;

    divElement.appendChild(ulElement);
    secondElement.appendChild(divElement);
    console.log(secondElement)

    divElement.style.backgroundColor = "#ddd";
    divElement.classList.add("div-class","deneme-class");
    divElement.style.color = "red";
    divElement.style.padding = "5px";

    //<h1>Eklediğimiz Başlık</h1>

    const cities = ["İstanbul","Çanakkale","İzmir","Edirne","Sakarya","Ankara","Antalya"];

    const cityTitle = document.createElement("h2");
    cityTitle.innerText = "Şehir Listesi";
    secondElement.appendChild(cityTitle);
    const cityList = document.createElement("ul");
    cityList.innerHTML = "";
    secondElement.appendChild(cityList);

    for(let i = 0; i < cities.length; i++){
        const cityItem = document.createElement("li");
        cityItem.innerHTML = cities[i];        
        cityList.appendChild(cityItem);
    }
     