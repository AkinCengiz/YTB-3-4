const infoHeaderElement = document.getElementById("info-header");
const infoDetailsElement = document.querySelector("#info-details");

/**
 * 
 
 */

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const avatarElement = document.createElement("img");
    avatarElement.src = data.personalInfos.image;
    avatarElement.style.width = "100%";
    avatarElement.alt = "Avatar";
    infoHeaderElement.appendChild(avatarElement);
    const divElement = document.createElement("div");
    divElement.className = "w3-display-bottomleft w3-container w3-text-black";
    const h2Element = document.createElement("h2");
    h2Element.style.color = "white";
    h2Element.innerText = `${data.personalInfos.firstname} ${data.personalInfos.lastname}`;
    divElement.appendChild(h2Element);
    infoHeaderElement.appendChild(divElement);
    infoDetailsElement.innerHTML = `
    <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.personalInfos.job}</p>
    <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.personalInfos.address.town} / ${data.personalInfos.address.city}</p>
    <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.personalInfos.email}</p>
    <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${data.personalInfos.phone}</p>
    `;
    
    const skillsElement = document.createElement("p");
    skillsElement.className = "w3-large";
    skillsElement.innerHTML = `<b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b>`;
    infoDetailsElement.appendChild(skillsElement);
    data.skills.forEach(item => {
        skillsElement.innerHTML += `
            <p>${item.skill}</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${item.degree}%">${item.degree}%</div>
          </div>
        `;
        
    });

    const languagesElement = document.createElement("p");
    languagesElement.className = "w3-large w3-text-theme";
    languagesElement.innerHTML = `<b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b>`;
    infoDetailsElement.appendChild(languagesElement);
    data.languages.forEach(item => {
        languagesElement.innerHTML += `
            <p>${item.name}</p>
            <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:${item.degree}%"></div>
          </div>
        `
    })

    /**
     * 
     * <p id="languages" class="w3-large w3-text-theme"></p>
          <p>English</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
          </div>
          <p>Spanish</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>
          </div>
          <p>German</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
          </div>
     */

    console.log(skillsElement);
  });

