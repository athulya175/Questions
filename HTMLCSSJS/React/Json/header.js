function generateLIstItems(pdt){
    return`
            <li class="detLi"> ${pdt.ram}GB RAM | ${pdt.rom} GB ROM | ${pdt.expandale&&"Expandable"}</li>
        <li class="detLi">${pdt.display["size-cm"]}cm (${pdt.display["size-inch"]}inch) ${pdt.display.type}</li>
        <li class="detLi">${pdt.camera.rear}|${pdt.camera.front} Front Camera</li>
        <li class="detLi">${pdt.battery.capacity} ${pdt.battery.desc}</li>
        <li class="detLi">${pdt.processor.brand} ${pdt.processor.model} ${pdt.processor.cores}-Core ${pdt.processor.speed}</li>
        <li class="detLi">${pdt.warenty}</li>`
    
}


function createCard(pdt){
    let card=document.createElement("div")
    card.className="card"
    let listItems=generateLIstItems(pdt)
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
        return card;
}
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
        let card=createCard(pdt)
        container.appendChild(card)
    })

})

/*
    fetch("./Product.json")

    .then(response => response.json())
    //Once the file is fetched,it converts the raw response into JSON format so you can use ut as JavaScript object/array
    .then(data => {
        //After parsing,the "data" variable contains the full array of products from product.json
        let container = document.querySelector(".container");
        let filterBtns = document.querySelectorAll(".filter button");

        // function to render products
        function renderProducts(products){
            container.innerHTML = ""; 
            // clear old items
            products.forEach(pdt => {
            let card=createCard(pdt)
                container.appendChild(card);
            });
        }

        // initially show all
        renderProducts(data);

        // add filter functionality
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                let Ram = btn.getAttribute("data-ram");
                //reads the data-ram attribute from the click button 
                //ex:<button data-ram="4">4Gb</button>   -->ram=4
                if(Ram === "all"){
                    renderProducts(data);
                } else {
                    let filtered = data.filter(p => p.ram == Ram);
                    renderProducts(filtered);
                    //other wise filter data where product RAM matches the button CSSMathValue,then display only those
                }
            });
        });
    });
*/

/*
    // created buttons inside the js
    fetch("./Product.json")
    .then(response=>response.json())
    .then(data=>{
        let container=document.querySelector(".container")
        let  filtercontainer=document.querySelector(".filter")
        function renderProducts(product){
            container.innerHTML=""
            product.forEach(pdt=>{
                let card=createCard(pdt)
                container.appendChild(card)
            })
        }
        let ramValues=[...new Set(data.map(p=>p.ram))]
        // mapping as usual and the spread operator converts the "Set" back to normal array that is {4,5,6}  becomes to [4,6,8] as using maps it return the unique value not duplicatedd one
        let allbtn=document.createElement("button")
        allbtn.textContent="ALL"
        allbtn.setAttribute("data-ram","all")
        //set attribute takes 2 values of 2 params one is name and other is value
        filtercontainer.appendChild(allbtn)

        ramValues.forEach(ram=>{
            let btn=document.createElement("button")
            btn.textContent=`${ram} GB RAM`
            btn.setAttribute("data-ram",ram)
            filtercontainer.appendChild(btn)
        }
        

        )
        renderProducts(data)
        let allbtns=filtercontainer.querySelectorAll("button")
        allbtns.forEach(btn=>{
            btn.addEventListener("click",()=>{
                let Ram=btn.getAttribute("data-ram")
                if(Ram==="all"){
                    renderProducts(data)
                }
                else{
                    let filtered=data.filter(x=>x.ram==Ram)
                        renderProducts(filtered)
                }
            })
        })
    })
*/

/*
    fetch("./Product.json")
.then(response=>response.json())
.then(data=>{
    let container=document.querySelector(".container")
    let filterContainer=document.querySelector(".filter")
    let ramValues=[...new Set(data.map(p=>p.ram))]
    let brandValues=[...new Set(data.map(p=>p.brand))]
    function renderProducts(products){
        container.innerHTML=""
        products.forEach(pdt=>{
            let card=createCard(pdt)
        container.appendChild(card)
        })
        
    }

    function createButtons(values,fieldName){
        let allbtn=document.createElement("button")
        allbtn.textContent="ALL"
        allbtn.setAttribute("dataRam","all")
        filterContainer.appendChild(allbtn)

        values.forEach(val=>{
            let otherbtn=document.createElement("button")
        otherbtn.textContent=`${val} ${fieldName.toUpperCase()}`
        otherbtn.setAttribute("dataField",fieldName)
        otherbtn.setAttribute("dataValue",val)
        filterContainer.appendChild(otherbtn)
        })
    }
    createButtons(ramValues,"ram")
    createButtons(brandValues,"brand")
    renderProducts(data)
    let btns=document.querySelectorAll("button")
    btns.forEach(btn=>{
        btn.addEventListener("click",()=>{
            let field=btn.getAttribute("dataField")
            let value=btn.getAttribute("dataValue")
            if(value==="all"){
                renderProducts(data)
            }
            else{
                let filtered=data.filter(x=>x[field]==value)
                renderProducts(filtered)
            }
        })
    })

})

*/
fetch("./Product.json")
.then(response=>response.json())
.then(data=>{
        let container=document.querySelector(".container") 
        let filterContainer=document.querySelector(".filter")

        function showPage(products){
            container.innerHTML=""
            products.forEach(pdt=>{
                let card=createCard(pdt)
                container.appendChild(card)
            })
        } 
        let ramValues=[...new Set(data.map(p=>p.ram))]
        let brandValues=[... new Set (data.map(p=>p.brand))]

        function GenerateButtons(values,fieldName){
            let allbtn=document.createElement("button")
                allbtn.textContent="ALL"
                allbtn.setAttribute("dataField","all")
                filterContainer.appendChild(allbtn) 
            values.forEach(x=>{
                let otherbtn=document.createElement("button")
                otherbtn.textContent=`${x} ${fieldName.toUpperCase()}`
                otherbtn.setAttribute("dataField",fieldName)
                otherbtn.setAttribute("dataValue",x)
                filterContainer.appendChild(otherbtn)
            })
                
        }

        GenerateButtons(ramValues,"ram")
        GenerateButtons(brandValues,"brand")

        let btns=document.querySelectorAll("button")
        btns.forEach(btn=>{
            btn.addEventListener("click",()=>{
                let field=btn.getAttribute("dataField")
                let value=btn.getAttribute("dataValue")
                if(value==="all"){
                    showPage(data)
                }
                else{
                    let filtered=data.filter(p=>p[field]==value)
                    showPage(filtered)
                }
            })
        })
})
