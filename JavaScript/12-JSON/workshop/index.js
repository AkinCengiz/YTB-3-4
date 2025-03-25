
const personalInfos = {
        firstname : "Akın",
        lastname : "Cengiz",
        image : `https://i.pravatar.cc/150?img=52`,
        job : "Software Developer",
        address : {
            city:"İstanbul",
            town : "Eyüp"
        },
        email : "akincengiz@msn.com",
        phone : "05340183330"
    }

const skills = [
    {
        skill : "CSharp",
        degree : 90
    },
    {
        skill : "MS Sql Server",
        degree : 80
    },
    {
        skill : "HTML5",
        degree : 80
    },
    {
        skill : "CSS3",
        degree : 70
    },
    {
        skill : "JavaScript",
        degree : 60
    },
    {
        skill : "React",
        degree : 50
    }
];

const languages = [
    {
        name : "English",
        degree : "90"
    },
    {
        name : "Spanish",
        degree : "50"
    },
    {
        name : "German",
        degree : "60"
    },
]


const avatarElement = document.getElementById("avatar");
avatarElement.src = personalInfos.image;

const fullNameElement = document.querySelector("#fullname");
fullNameElement.innerHTML = `${personalInfos.firstname} ${personalInfos.lastname}`;
console.log(fullNameElement);

const jobElement = document.getElementById("job");
const jobSpan = document.createElement("span");
jobSpan.innerText = personalInfos.job;
jobElement.appendChild(jobSpan);
const locationElement = document.querySelector("#location");
const locationSpan = document.createElement("span");
locationSpan.innerText = `${personalInfos.address.town} / ${personalInfos.address.city}`;
locationElement.appendChild(locationSpan); 

const emailElement = document.querySelector("#email");
emailElement.innerHTML = `<i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"><span>${personalInfos.email}</span></i>`;

const phoneElement = document.getElementById("phone");
phoneElement.innerHTML = `<i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"><span>${personalInfos.phone}</span></i>`


const skillElement = document.getElementById("skills");

skills.forEach(item => {
    skillElement.innerHTML += `
        <p>${item.skill}</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${item.degree}%">${item.degree}%</div>
          </div>
    `;
})

const languagesElement = document.querySelector("#languages");


languages.forEach(item => {
    const langTitle = document.createElement("p");
    langTitle.innerText = item.name;
    languagesElement.appendChild(langTitle);
    const degreeBoxElement = document.createElement("div");
    degreeBoxElement.className = "w3-light-grey w3-round-xlarge";
    const degreeElement = document.createElement("div");
    degreeElement.className = "w3-round-xlarge w3-teal";
    degreeElement.style.height = "24px";
    degreeElement.style.width = `${item.degree}%`;
    //degreeElement.innerText = item.degree;
    degreeBoxElement.appendChild(degreeElement);
    languagesElement.appendChild(degreeBoxElement);

})


{/* <div class="">
<div class="" style="height:24px;width:100%"></div>
</div> */}