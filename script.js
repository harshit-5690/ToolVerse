const apps = [

{
name:"ChatGPT",
image:"https://cdn.simpleicons.org/openai",
description:"AI Assistant",
link:"https://chatgpt.com"
},

{
name:"Gemini",
image:"https://cdn.simpleicons.org/google",
description:"Google AI",
link:"https://gemini.google.com"
},

{
name:"GitHub",
image:"https://cdn.simpleicons.org/github",
description:"Code Hosting",
link:"https://github.com"
},

{
name:"YouTube",
image:"https://cdn.simpleicons.org/youtube",
description:"Video Platform",
link:"https://youtube.com"
},

{
name:"Instagram",
image:"https://cdn.simpleicons.org/instagram",
description:"Social Media",
link:"https://instagram.com"
},

{
name:"Telegram",
image:"https://cdn.simpleicons.org/telegram",
description:"Messaging",
link:"https://telegram.org"
}

];

const appContainer =
document.getElementById("appContainer");

function renderApps(data){

appContainer.innerHTML="";

data.forEach(app=>{

appContainer.innerHTML += `
<div class="app-card">

<img src="${app.image}">

<h3>${app.name}</h3>

<p>${app.description}</p>

<a href="${app.link}"
target="_blank"
class="download-btn">

Open

</a>

</div>
`;

});

}

renderApps(apps);

document
.getElementById("search")
.addEventListener("input",e=>{

const value =
e.target.value.toLowerCase();

const filtered =
apps.filter(app=>

app.name.toLowerCase()
.includes(value)

||

app.description
.toLowerCase()
.includes(value)

);

renderApps(filtered);

});
