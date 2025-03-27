//DOM ile elementlere erişmek
document.title = "JavaScript - DOM";

document.getElementById("section-title").innerText = "Section Bölümü"
console.log(document.getElementById("section-title").innerText);

const sectionTitles = document.getElementsByTagName("h2");
console.log(sectionTitles);
sectionTitles[1].innerText = "About Bölümü";

const classElements = document.getElementsByClassName("list-item");
console.log(classElements);
classElements[2].innerText = "Madde 3";

const listItems = document.querySelectorAll("#section>ul#section-list>li.list-item");
console.log(listItems);

const createdElement = document.getElementById("created");
const createH2 = document.createElement("h2");
createH2.innerText = "Created Bölümü";
createdElement.appendChild(createH2);

const pElement = document.createElement("p");
pElement.innerHTML = "<strong>Burası paragraf <br/> Burası yeni satır</strong>";
createdElement.appendChild(pElement);
const h1Element = document.createElement("h1");
h1Element.innerText = "Ana Başlık";

const bodyElement = document.getElementById("body");
//bodyElement.prepend(h1Element);

const aboutElement = document.querySelector("#about");
aboutElement.prepend(h1Element);


//CLASS EKLEME ÇIKARMA
aboutElement.className = "Deneme deneme2";
aboutElement.classList.add("primary","bg-dark","text-light")
console.log(aboutElement);
aboutElement.classList.remove("Deneme","deneme2");
console.log(aboutElement);

const btn = document.createElement("button");
btn.textContent = "TOGGLE";
bodyElement.prepend(btn);
btn.addEventListener("click",() => {
    aboutElement.classList.toggle("toogle");
})