let firstname = "Akın";
let lastname = "Cengiz";

//Parametresiz ve dönüş değeri olmayan metot
function hello(){
    console.log("Hello");
}
//Parametreli ve dönüş değeri olmayan metot
function writeFirstName(firstname = ""){
    console.log(firstname);
}
//Parametresiz ve dönüş değeri olmayan arrow function
const helloArrow = () => {
    console.log("Hello Arrow");
};

const writeArrowFirstName = (firstname = "Null") => {
    console.log(firstname);
}
//Eğer Arrow function tek bir parametre kullanıyorsa  () parantezine gerek yoktur. 
// Metot gövdesi tek bir komut satırı ise {} parantezlere de gerek yoktur. 
// Eğer parametre sayısı 2 ve daha fazla ise ya da parametre yoksa () koymak zorunludur.
const arrowOneParameter = firstname => {
    console.log(firstname);
}

const arrowOneParameter2 = firstname => console.log(firstname);
const arrowFullName = (firstname,lastname) => {
    console.log(firstname,lastname)
}



writeFirstName();
helloArrow();
writeArrowFirstName(firstname);

arrowOneParameter("Tek parametre");

arrowOneParameter2("One Parameter 2");
arrowFullName("İsim", "Soyisim");

//DEĞER DÖNDÜREN METOTLAR
let number1 = 5;
let number2 = 7;


function selamla(){
    return "Hoşgeldiniz...";
}

function getFullName(firstname,lastname){
    return `${firstname} ${lastname}`;
}

const arrowSelamla = () => console.log("Hoşgeldiniz...");
const arrowGetFullName = (firstname,lastname) => {
    return `${firstname} ${lastname}`
}

console.log(selamla());
let selam = selamla();
console.log(selam);

console.log(getFullName("Console","Log"));
let fullname = getFullName(firstname,lastname);
console.log(fullname);

console.log(selam)