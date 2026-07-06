/*=========================================
    Mohammad Shahid Portfolio
==========================================*/


/*==============================
DOCUMENT DATA
==============================*/

const documents = [

{
title:"ATA 52 Passenger Door Manual",
category:"Aviation",
description:"Aircraft Maintenance Manual for Passenger Door System.",
icon:"fa-plane",
file:"samples/ATA52.pdf"
},

{
title:"ATA 34 Navigation System",
category:"Aviation",
description:"Aircraft Navigation Documentation.",
icon:"fa-plane",
file:"samples/ATA34.pdf"
},

{
title:"ATA 21 Air Conditioning",
category:"Aviation",
description:"Aircraft Air Conditioning Documentation.",
icon:"fa-plane",
file:"samples/ATA21.pdf"
},

{
title:"tmMDC User Manual",
category:"User Manual",
description:"Enterprise User Manual.",
icon:"fa-book",
file:"samples/tmMDC.pdf"
},

{
title:"tmA2 Installation Guide",
category:"Installation",
description:"Installation and Configuration Guide.",
icon:"fa-download",
file:"samples/tmA2.pdf"
},

{
title:"Release Notes",
category:"Release Notes",
description:"Software Release Documentation.",
icon:"fa-code-branch",
file:"samples/ReleaseNotes.pdf"
},

{
title:"Knowledge Base",
category:"Knowledge Base",
description:"Troubleshooting Articles.",
icon:"fa-circle-question",
file:"samples/KnowledgeBase.pdf"
}

];


/*==============================
CREATE CARDS
==============================*/

const grid=document.getElementById("portfolioGrid");

function renderCards(list){

grid.innerHTML="";

list.forEach(doc=>{

grid.innerHTML+=`

<div class="portfolio-card">

<div class="card-top">

<i class="fa-solid ${doc.icon}"></i>

</div>

<div class="card-body">

<h3>${doc.title}</h3>

<p>${doc.description}</p>

<div class="tags">

<span>${doc.category}</span>

</div>

<div class="card-buttons">

<a href="#"
class="preview"
onclick="previewPDF('${doc.file}')">

Preview

</a>

<a
class="download"
href="${doc.file}"
download>

Download

</a>

</div>

</div>

</div>

`;

});

}

renderCards(documents);



/*==============================
SEARCH
==============================*/

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=documents.filter(doc=>

doc.title.toLowerCase().includes(value) ||

doc.description.toLowerCase().includes(value) ||

doc.category.toLowerCase().includes(value)

);

renderCards(filtered);

});



/*==============================
FILTERS
==============================*/

const buttons=document.querySelectorAll("#filters button");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

buttons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const category=btn.dataset.filter;

if(category==="all"){

renderCards(documents);

return;

}

renderCards(

documents.filter(doc=>doc.category===category)

);

});

});



/*==============================
DARK MODE
==============================*/

const toggle=document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});



/*==============================
TYPING EFFECT
==============================*/

const typing=document.getElementById("typing");

const words=[

"Senior Technical Writer",

"Aviation Documentation Specialist",

"Enterprise Documentation Expert",

"DITA & MadCap Flare Expert",

"Knowledge Management Professional"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const current=words[wordIndex];

typing.textContent=current.substring(0,charIndex);

if(!deleting){

charIndex++;

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?40:100);

}

type();



/*==============================
BACK TO TOP
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/*==============================
PDF MODAL
==============================*/

const modal=document.getElementById("pdfModal");

const frame=document.getElementById("pdfFrame");

function previewPDF(file){

frame.src=file;

modal.style.display="flex";

}

modal.onclick=()=>{

modal.style.display="none";

frame.src="";

};



/*==============================
NAVIGATION ACTIVE LINK
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});