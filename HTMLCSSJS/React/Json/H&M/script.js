let header =document.querySelector(".header")
let title=document.createElement("div")
title.className="title"
title.innerHTML=`
<div class="titleLayout">
    <button class="titlebutton">
        <p class="titletxt">Hoodies & Sweatshirts from ₹799</p>
            <div class="titleimg">
                <img src="icons/plusicon.svg">
            </div>
    </button>
</div>`
header.appendChild(title)
let navbar=document.createElement("div")
navbar.className="navbar"
navbar.innerHTML=`
<div class="navGrd">
    <div class="navFlx">
        <div class="image">
            <img src="icons/headH&M.svg" class="logo">
        </div>
    </div>
    <div class="icons">
    <ul class="iconList">
    <li><button class="iconbtn"><img src="icons/search (1).svg"></li>
    <li><button class="iconbtn"><img src="icons/user.svg"></li>
    <li><button class="iconbtn"><img src="icons/wished.svg"></li>
    <li><button class="iconbtn"><img src="icons/cart (1).svg"></li>
    <li><button class="iconbtn"><img src="icons/burg.svg"></li></ul>
    </div>
</div>
`
header.appendChild(navbar)
let container=document.querySelector(".container")
let buttonnav=document.querySelector(".buttonnav")
function createButton(tit){
    let unorderd=document.createElement("ul")
       unorderd.className="unorderd"
       tit.forEach(tit=>{
        let lists=document.createElement("Button")
       lists.className="filterButtonList"
       lists.textContent=tit.toUpperCase()
       unorderd.appendChild(lists)
       })
       
       return unorderd

}
fetch("./products.json")
.then(response=>response.json())
.then(data=>{
    let uniqueTitle=[...new Set(data.map(x=>x.type))]
    console.log(uniqueTitle)
    
        let unorderd=createButton(uniqueTitle) 
       buttonnav.appendChild(unorderd)
    });
