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
let heading=document.querySelector(".heading")
let cardLayout =document.querySelector(".cardLayout")

function createCard(pdt){
    // let cardul=document.createElement("ul")
    // cardul.className="cardul"
    let cardli=document.createElement("li")
    cardli.className="cardli"
    cardli.innerHTML=`

    <div class="cardlayout">
    <div class="cardtop">
    <img src=${pdt.img}>
    </div>
    <div class="cardbtm">
    <div class="btmCont">
    <div class="cardbtm1">
    <h2>${pdt.desc}</h2>
    <p class="price">${pdt.price}</p></div>
    </div>
    </div>
    </div>
`
    return cardli
}
fetch("./products.json")
.then(response=>response.json())
.then (data=>{
    let uniqueTitle=[...new Set(data.map(x=>x.type))]
    let unorderd=document.createElement("ul")
    unorderd.className="unorderd"

    uniqueTitle.forEach(tit=>{
        let button=document.createElement("button")
        button.className="filterButtonList"
        button.textContent=tit.toUpperCase()
        button.addEventListener("click",()=>{
            let filterpdt=data.filter(x=>x.type===tit)
            filterpdt.forEach(p=>heading.textContent=(p.title))  
        })
        unorderd.appendChild(button)
    })
    buttonnav.appendChild(unorderd)
})
let sortby=document.createElement("div")
sortby.className="sortby"
sortby.innerHTML=`<div class="sortby">
                <div class="sortby1">
                    <button class="sortbtn">SORT BY
                        <img src="icons/plus.svg">
                    </button>
                    <button class="sortbtn">FILTER
                        <img src="icons/filter (1).svg">
                    </button>
                </div>
            </div>`
    cardLayout.appendChild(sortby)
let cardul=document.createElement("ul")
            cardul.className="cardul"
fetch("./products.json")
.then(response=>response.json())
.then(data=>{
    data.forEach(pdt=>{
        
        let cardli=createCard(pdt)
        cardul.appendChild(cardli)
    })
    cardLayout.appendChild(cardul)
    let producttype=[...new Set(data.map(x=>x.type))]
    let buttons=document.querySelectorAll(".filterButtonList")
    buttons.forEach(btn=>{
        btn.addEventListener("click",()=>{
            console.log(Start from here )
        })
    })
})


/*
function createButton(tit){
    let unorderd=document.createElement("ul")
       unorderd.className="unorderd"
       tit.forEach(tit=>{
        let lists=document.createElement("Button")
       lists.className="filterButtonList"
       lists.textContent=tit.toUpperCase()

       lists.addEventListener("click",()=>{
        console.log(tit)
       })
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
        
        })
       
*/