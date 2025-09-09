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
        button.setAttribute("dataType",tit)

        button.addEventListener("click",()=>{
            let filterpdt=data.filter(x=>x.type===tit)
            filterpdt.forEach(p=>heading.textContent=(p.title))  
        })
        unorderd.appendChild(button)
    })
    buttonnav.appendChild(unorderd)
})

function toSort(){
    const sortUl=document.createElement("ul")
    sortUl.className="sortul"
/* to avoid code repeataion
    sortUl.innerHTML=`
   
        <li class="dropDown">
            <div class="dropcontent">
                <div class="sorttxt">
                    <input type="radio" name="sort"></input>
                    <label class="label">Recommended</label>
                </div>
            </div>
        </li>
        <li class="dropDown">
            <div class="dropcontent">
                <div class="sorttxt">
                    <input type="radio" name="sort"></input>
                    <label class="label">Newest</label>
                </div>
            </div>
        </li>
        <li class="dropDown">
            <div class="dropcontent">
                <div class="sorttxt">
                    <input type="radio" name="sort"></input>
                    <label class="label">Lowest price</label>
                </div>
            </div>
        </li>
        <li class="dropDown">
            <div class="dropcontent">
                <div class="sorttxt">
                    <input type="radio" name="sort"></input>
                    <label class="label">Highest price</label>
                </div>
            </div>
        </li>
  `
  */  

  const option=["Recommended","Newest","Lowest price","Highest price"]
  option.forEach(option=>{
    const li=document.createElement("li")
    li.className="dropDown"
    const dropcontent=document.createElement("div")
    dropcontent.className="dropcontent"
    const sortText=document.createElement("div")
    sortText.className="sorttext"
    const input=document.createElement("input")
    input.className="sortInput"
    input.type="radio"
    input.name="sort"
    input.value="option"

    const label=document.createElement("label")
    label.className="label"
    label.textContent=option

    input.addEventListener("change",()=>{
        console.log(option)
    })
    sortText.appendChild(input)
    sortText.appendChild(label)
    dropcontent.appendChild(sortText)
    li.appendChild(dropcontent)
    sortUl.appendChild(li)
  })
    return sortUl
}

let sortby=document.createElement("div")
sortby.className="sortby"
sortby.innerHTML=`<div class="sortby">
                <div class="sortby1">
                    <button class="sortbtn" id="sort">SORT BY
                        <img src="icons/plus.svg">
                    </button>
                    <button class="sortbtn" id="fil">FILTER
                        <img src="icons/filter (1).svg">
                    </button>
                </div>
            </div>`
    cardLayout.appendChild(sortby)
    let sort=document.getElementById("sort")
    sort.addEventListener("click",()=>{
        
        let sortUl=toSort()
        sortby.appendChild(sortUl)
        let dropDowns=document.querySelectorAll(".dropDown")
        dropDowns.forEach((drop,index)=>{
            let input=drop.querySelector(".sortInput")
            if(index==0){
                input.checked=true
                drop.style.background="#f2f3f2"
            }
            input.addEventListener("change",()=>{
                dropDowns.forEach(d=>d.style.background="white")
                drop.style.background="#f2f3f2"
            })
        })
    })
let cardul=document.createElement("ul")
            cardul.className="cardul"

fetch("./products.json")
.then(response=>response.json())
.then(data=>{
    // data.forEach(pdt=>{
        
    //     let cardli=createCard(pdt)
    //     cardul.appendChild(cardli)
    // })
    cardLayout.appendChild(cardul)
    let producttype=[...new Set(data.map(x=>x.type))]
    let buttons=document.querySelectorAll(".filterButtonList")
    buttons.forEach(btn=>{
        btn.addEventListener("click",()=>{
            buttons.forEach(b=>b.classList.remove("active"))
            btn.classList.add("active")
           let category=btn.getAttribute("dataType")
           cardul.innerHTML=""
           let filterd=data.filter(pdt=>pdt.type===category)
           filterd.forEach(pdt=>{
            let card=createCard(pdt)
            cardul.append(card)
           })
        })
    })
    // for default selection 
    if(buttons.length>0){
        buttons[0].click()
    }
    let sortUl=toSort()
    sortby.appendChild(sortUl)
    let dropDowns=document.querySelectorAll(".dropDown")
    
    let currentdate=new Date()
    let currentYear=currentdate.getFullYear()
    console.log(currentYear)
    dropDowns.forEach(drop=>{
        drop.addEventListener("change",()=>{
            let option=drop.textContent
/*
            if(option=="Newest"){
                 data.forEach(pdt=>{
                    let filtered=data.filter(pdt=>{
                    let releaseDate=pdt.release
                    let releasedYear=Number(releaseDate.split("-")[2])
                    return releasedYear>=currentYear
                })
               
                cardul.innerHTML=""
                filtered.forEach(pdt=>{
                    let card=createCard(pdt)
                    cardul.append(card)
                })
                
            })
            }
             else if(option=="Lowest price"){
                data.forEach(pdt=>{
                    let filterd=data.filter(pdt=>{
                        return pdt.price<500
                    })
                    cardul.innerHTML=""
                filterd.forEach(pdt=>{
                    let card=createCard(pdt)
                    cardul.append(card)
                })
                })
             }
              else if(option=="Highest price"){
                data.forEach(pdt=>{
                    let filterd=data.filter(pdt=>{
                        return pdt.price>500
                    })
                    cardul.innerHTML=""
                    filterd.forEach(pdt=>{
                    let card=createCard(pdt)
                    cardul.append(card)
                })
                })
             }
*/   
let filterd=[]
if(option=="Newest"){
    filterd=data.filter(pdt=>{
        let releasedYear=Number(pdt.release.split("-")[2])
        return releasedYear>=currentYear
    })
}
else if(option==="Lowest price"){
    filterd=data.filter(pdt=>{
        let priceInNum=Number(pdt.price.replace(/,/g,""))
    return priceInNum<500
})
    
}else if(option=="Highest price"){
    filterd=data.filter(pdt=>{
        let priceInNum=Number(pdt.price.replace(/,/g,""))
    return priceInNum>500
})
}
else{
    filterd=data
}
cardul.textContent=""
filterd.forEach(pdt=>{
    let card=createCard(pdt)
    cardul.append(card)
})
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