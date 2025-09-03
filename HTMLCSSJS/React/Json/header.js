fetch("./header.json")
.then(response=>response.json())
.then(data=>{
    let navbar=document.querySelector(".navbar")
    let logo=document.createElement("div")
    logo.className="logo"
    logo.textContent=data.name
    navbar.appendChild(logo)

    let navRight=document.createElement("div")
    navRight.className="nav-right"

    data.nav.forEach(link=>{
        let a=document.createElement("a")
        a.href="#"
        a.textContent=link;
        navRight.append(a)
    })
    navbar.appendChild(navRight)
})

fetch("./Product.json")
.then(response=>response.json())
.then(data=>{
    let container=document.querySelector(".container")
    data.forEach(pdt=>{
        let card =document.createElement("div")
        card.className="card"
        card.innerHTML=`
       <div class="imgcnt"> <img src=${pdt.img} class="pdt-img"></div>
        <div class="pdtdtls">
            <div class="pdt-left">
            <div class="pdtName">${pdt.name}</div>
            <div class="Ratings"><span id="rdlts"><div class=</span></div>
            </div>
        </div>
        `
        container.appendChild(card)
    })

})
