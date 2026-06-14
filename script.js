// =========================
// TOOLVERSE APPS DATABASE
// =========================

const apps = [

{
name:"ChatGPT",
image:"https://cdn.simpleicons.org/openai",
description:"AI Assistant by OpenAI",
link:"https://chatgpt.com"
},

{
name:"Gemini",
image:"https://cdn.simpleicons.org/google",
description:"Google AI Assistant",
link:"https://gemini.google.com"
},

{
name:"GitHub",
image:"https://cdn.simpleicons.org/github",
description:"Code Hosting Platform",
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
description:"Social Media App",
link:"https://instagram.com"
},

{
name:"Discord",
image:"https://cdn.simpleicons.org/discord",
description:"Gaming Community",
link:"https://discord.com"
},

{
name:"Telegram",
image:"https://cdn.simpleicons.org/telegram",
description:"Messaging App",
link:"https://telegram.org"
}

];

// =========================
// APP CONTAINER
// =========================

const appContainer =
document.getElementById("appContainer");

// =========================
// RENDER APPS
// =========================

function renderApps(data){

appContainer.innerHTML="";

data.forEach(app=>{

appContainer.innerHTML += `

<div class="app-card">

<img
src="${app.image}"
alt="${app.name}"
loading="lazy">

<h3>${app.name}</h3>

<p>${app.description}</p>

<a
href="${app.link}"
target="_blank"
class="download-btn">

Open App

</a>

</div>

`;

});

}

// Initial Render

renderApps(apps);

// =========================
// SEARCH
// =========================

const search =
document.getElementById("search");

search.addEventListener("input",()=>{

const value =
search.value.toLowerCase();

const filtered =
apps.filter(app=>

app.name
.toLowerCase()
.includes(value)

||

app.description
.toLowerCase()
.includes(value)

);

renderApps(filtered);

});

// =========================
// ADD APP FUNCTION
// =========================

function addApp(
name,
image,
description,
link
){

apps.push({

name,
image,
description,
link

});

renderApps(apps);

}

// =========================
// DOWNLOAD PROMPT
// =========================

function downloadPrompt(){

const text = `
ToolVerse Prompt

Create a cinematic portrait
with dramatic lighting,
ultra realistic details,
8K quality,
sharp focus,
professional photography.
`;

const blob =
new Blob([text],{

type:"text/plain"

});

const a =
document.createElement("a");

a.href =
URL.createObjectURL(blob);

a.download =
"ToolVerse-Prompt.txt";

a.click();

  }
