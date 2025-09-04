fetch("./header.json")
.then(response=>response.json())
.then(data=>{
    let navbar=document.querySelector(".navbar")
    let logo=document.createElement("div")
    logo.className="logo"
    logo.textContent=data.name
    navbar.appendChild(logo)
    console.log(hey)
    let navRight=document.createElement("div")
    navRight.className="nav-right"
console.log("hye")
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
        let listItems=`
        <li class="detLi"> ${pdt.ram}GB RAM | ${pdt.rom} GB ROM | ${pdt.expandale&&"Expandable"}</li>
        <li class="detLi">${pdt.display["size-cm"]}cm (${pdt.display["size-inch"]}inch) ${pdt.display.type}</li>
        <li class="detLi">${pdt.camera.rear}|${pdt.camera.front} Front Camera</li>
        <li class="detLi">${pdt.battery.capacity} ${pdt.battery.desc}</li>
        <li class="detLi">${pdt.processor.brand} ${pdt.processor.model} ${pdt.processor.cores}-Core ${pdt.processor.speed}</li>
        <li class="detLi">${pdt.warenty}</li>`
        card.innerHTML=`
       <div class="imgcnt"> <img src=${pdt.img} class="pdt-img"></div>
        <div class="pdtdtls">
            <div class="pdt-left">
            <div class="pdtName">${pdt.name}</div>
            <div class="Ratings"><span id="rdlts"><div class="ratcount">${pdt.rats}<img src=${pdt.ratimg} class="starimg"></div></span>
                <span class="ratitle">${pdt.rating} Rattings & ${pdt.reviews} Reviews
            </div>
            <div class="details">
            <ul class="unorder">
            ${listItems}
            </ul>
            </div>
            </div>
        </div>
        `
        container.appendChild(card)
    })

})

/*
fetch("./Product.json")
.then(response=>response.json())
.then(data=>{
    let leftpage=document.querySelector(".left-page")
    let brands=[...new Set(data.map(item=>item.brand))]
    let rams=[...new Set(data.map(item=>item.ram))]
    data.forEach(fil=>{
        let filterLayout=document.createElement("div")
        filterLayout.className="filterLayout"
        filterLayout.innerHTML=`
        <div class="filcontainer">
        <section class="filTitle">Filter</section>
        <section class="filSub">BRAND
            <div class="brand1"></div>
        </section>
        <section class="filSub">
        RAM<div id="ram1"></div>
        </section>
        </div>`
        leftpage.appendChild(filterLayout)
    })
})
*/
fetch("./Product.json")
.then(response => response.json())
.then(data => {
    let container = document.querySelector(".container");
    let filterBtns = document.querySelectorAll(".filter button");

    // function to render products
    function renderProducts(products){
        container.innerHTML = ""; // clear old items
        products.forEach(pdt => {
            let card = document.createElement("div");
            card.className = "card";

            let listItems = `
                <li class="detLi">${pdt.ram}GB RAM | ${pdt.rom} GB ROM | ${pdt.expandable && "Expandable"}</li>
                <li class="detLi">${pdt.display["size-cm"]}cm (${pdt.display["size-inch"]} inch) ${pdt.display.type}</li>
                <li class="detLi">${pdt.camera.rear} | ${pdt.camera.front} Front Camera</li>
                <li class="detLi">${pdt.battery.capacity} ${pdt.battery.desc}</li>
                <li class="detLi">${pdt.processor.brand} ${pdt.processor.model} ${pdt.processor.cores}-Core ${pdt.processor.speed}</li>
                <li class="detLi">${pdt.warenty}</li>
            `;

            card.innerHTML = `
                <div class="imgcnt"><img src=${pdt.img} class="pdt-img"></div>
                <div class="pdtdtls">
                    <div class="pdt-left">
                        <div class="pdtName">${pdt.name}</div>
                        <div class="Ratings">
                            <span id="rdlts"><div class="ratcount">${pdt.rats}<img src=${pdt.ratimg} class="starimg"></div></span>
                            <span class="ratitle">${pdt.rating} Ratings & ${pdt.reviews} Reviews</span>
                        </div>
                        <div class="details">
                            <ul class="unorder">${listItems}</ul>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // initially show all
    renderProducts(data);

    // add filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let ram = btn.getAttribute("data-ram");
            if(ram === "all"){
                renderProducts(data);
            } else {
                let filtered = data.filter(p => p.ram == ram);
                renderProducts(filtered);
            }
        });
    });
});


