const emailElement = document.querySelector("#email");
const nameElement = document.querySelector("#name");

//FOCUS => Input elementine odaklanıldığında çalışır

const getEventType = (e) => {
    //e.target.style.border = "5px solid red"
    console.log(e.type);
}
emailElement.addEventListener("focus",getEventType)

//BLUR => 
function getBlur(e){
    console.log(e.type);
}

nameElement.addEventListener("blur",getBlur);
emailElement.addEventListener("blur",getBlur);


//copy => Input element içeriği kopyalandığında çalışır
nameElement.addEventListener("copy", getEventType);
//cut => Input element içeriği kesme çalışır
nameElement.addEventListener("cut", getEventType);
//paste => Input element içeriği yapıştırıldığında çalışır
nameElement.addEventListener("paste", getEventType);