function createLists(type){
    let leftUnordered=document.createElement("ul")
         leftUnordered.className="leftUnorder"
           let li=document.createElement("li")
           li.className="lists"
           li.textContent=type.charAt(0).toUpperCase()+type.slice(1)
           li.setAttribute("dataType",type)
            leftUnordered.appendChild(li)
            return leftUnordered
}
fetch("./Travel.json")
.then(Response=>Response.json())
.then(data=>{
    let containerLeft=document.querySelector(".containerLeft")
   let uniqueTitle=[...new Set(data.map(item=>item.type))]
    uniqueTitle.forEach(tit=>{
         let leftUnordered=createLists(tit)
            containerLeft.appendChild(leftUnordered)
    })
    
    let lists=document.querySelectorAll(".lists")
            lists.forEach(lst=>{
                lst.addEventListener("click",()=>{
                    
                })
            })    
})

function createCard(pdt){
    let card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
       
        <div class="subcard">
        <img src=${pdt.img}>
        <p class="bookTitle">${pdt.name}</p>
        <p class="price">£${pdt.Price}</p>
        <div class="stock">
        <i class="fa fa-check"></i>
        <span>In stock</span>
        </div>
        <button class="addCart">Add to basket</button>
        </div>`
        return card
}
/*
fetch("./Travel.json")
.then(response=>response.json())
.then(data=>{
    let containerRight=document.querySelector(".containerRight")
    data.forEach(pdt=>{
        let card= createCard(pdt)
        containerRight.appendChild(card)
    })

    let bookType=[...new Set (data.map(x=>x.type))]
    let lists=document.querySelectorAll(".lists")
    lists.forEach(lst=>{       
        lst.addEventListener("click",()=>{ 
        let category=lst.getAttribute("dataType")
            console.log("click",category)
            containerRight.innerHTML=""
            let filterd=data.filter(pdt=>pdt.type===category)
            filterd.forEach(pdt=>{
                let card=createCard(pdt)
                containerRight.appendChild(card)
            })
          })
        })
    })
          

/*

