const user = {
    firstname : "Akın",
    lastname : "Cengiz"
}

console.log(user)

console.log("Firstname : ",user.firstname);
console.log("Lastname : ",user.lastname);

const myInfo = {
    firstname : "Akın",
    lastname : "Cengiz",
    email : "akincengiz@msn.com",
    drivingLicence : true,
    address : {
        city : "İstanbul",
        town : "Eyüp",
        district : "Göktürk",
        buildNumber : 8
    },
    programmingLanguages : ["Html","Css","JavaScript","C#","Java"],
    getFullname : (firstname,lastname) => {
        console.log(firstname + " " + lastname);
    }
}

console.log(myInfo);
console.log(myInfo.email);
console.log(myInfo.address.city)
console.log(myInfo.programmingLanguages[3]);
myInfo.getFullname("Akın","Cengiz");