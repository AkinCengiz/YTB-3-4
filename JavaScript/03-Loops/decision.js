let number1 = 5;
let number2 = 37;
let number3 = 43;

if (number1 % 2 == 0) {
  console.log("Number1 çift sayıdır...");
}

let note = 77;

if (note >= 85) {
  console.log("AA");
}
if (note >= 75) {
  console.log("BB>");
}
if (note >= 60) {
  console.log("CC");
}
if (note >= 45) {
  console.log("DD");
}
if (note < 45) {
  console.log("FF");
}

//IF ELSE
if (note >= 85) {
  console.log("=> AA");
} else if (note >= 75) {
  console.log("=> BB");
} else if (note >= 60) {
  console.log("=> CC");
} else if (note >= 45) {
  console.log("=> DD");
} else {
  console.log("=> FF");
}

let day = 6;

switch (day) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  case 4:
    console.log("Perşembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  case 7:
    console.log("Pazar");
    break;
  default:
    console.log("Hatalı gün bilgisi");
    break;
}

switch (day) {
    case 1:
      
    case 2:
      
    case 3:
      
    case 4:
      
    case 5:
      console.log("Hafta içi");
      break;
    case 6:
      
    case 7:
      console.log("Hafta Sonu");
      break;
    default:
      console.log("Hatalı gün bilgisi");
      break;
  }
