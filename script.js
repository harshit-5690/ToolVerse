// ToolVerse Apps Data

const apps = [function downloadPrompt() {

const text = "My Prompt Here";

const blob = new Blob([text], {
type: "text/plain"
});

const a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "prompt.txt";

a.click();

}

{
name:"ChatGPT",
image:"IMG_20260611_215851_582.webp",
description:"AI Assistant by OpenAI",
link:"#"
},

{
name:"Gemini",
image:"IMG_20260611_215851_582.webp",
description:"Google AI Assistant",
link:"#"
},

{
name:"ToolVerse",
image:"IMG_20260611_215851_582.webp",
description:"Apps, Tools & Downloads",
link:"#"
}

];

// Container

const appContainer =
document.getElementById("appContainer");

// Create Cards

function renderApps(data){

appContainer.innerHTML="";

data.forEach(app=>{

appContainer.innerHTML += `

<div class="app-card">

<img src="${app.image}">

<h3>${app.name}</h3>

<p>${app.description}</p>

<a
href="${app.link}"
class="download-btn">

Open

</a>

</div>

`;

});

}

// Initial Load

renderApps(apps);

// Search

const search =
document.getElementById("search");

search.addEventListener("input",()=>{

const value =
search.value.toLowerCase();

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

// Future Function

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
