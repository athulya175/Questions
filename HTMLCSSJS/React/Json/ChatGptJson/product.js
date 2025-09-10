let header=document.querySelector(".header")
let container=document.querySelector(".container")
let navbar=document.querySelector(".navbar")
let inner=document.querySelector(".inner")
let bookList=document.querySelector(".bookList")
header.innerHTML=`
<div class="headerTitle">
<div class="headertxt">
Books to Scrape <small>We love being scraped!</small></div></div>`
navbar.innerHTML=`
<ul class="unorderd">
<li>Home</li>
<li>Books</li></ul>`
inner.appendChild(navbar)

 let bookUl=document.createElement("ul")
    bookUl.className="bookUl"

function createBookList(type){
    let bookli=document.createElement("li")
    bookli.className="bookli"
    bookli.setAttribute("dataType",type)
    bookli.textContent=type.charAt(0).toUpperCase()+type.slice(1)
    bookUl.appendChild(bookli)
    return bookUl
}
fetch("./product.json")
.then(response=>response.json())
.then(data=>{
    let bookList=document.querySelector(".bookList")
    let uniqueBookTitle=[...new Set(data.map(x=>x.type))]
    uniqueBookTitle.forEach(titl=>{
        let bookUl=createBookList(titl)
    bookList.appendChild(bookUl)
    })
})
inner.appendChild(bookList)


function sampleDetails(){
    let bookDetails=document.querySelector(".bookDetails")
    bookDetails.innerHTML=`
    <div class="bookShowtit"><h1 class="titleoftype"></h1></div>
    <div class="showResult"><strong>26 </strong>results</div>
    <div class="warning"><strong>Warning!</strong>This is a demo website for web scraping purposes.Price and ratings here  were randomly assigned and have no real meaning.</div>`
    return bookDetails
}
let bookDetails=sampleDetails()
    inner.appendChild(bookDetails)
fetch("./product.json")
.then(response=>response.json())
.then(data=>{
    let unorderd=document.querySelector(".unorderd")
    let bookli=document.querySelectorAll(".bookli")
    let nameli=document.createElement("li")
    nameli.className="newtitl"
    let titleoftype=document.querySelector(".titleoftype")
    
    bookli.forEach(lst=>{
        lst.addEventListener("click",()=>{
            let dataType=lst.getAttribute("dataType")
            let typeTitle=dataType.charAt(0).toLocaleUpperCase()+dataType.slice(1)
            nameli.textContent=typeTitle
            titleoftype.textContent=typeTitle
        })
        unorderd.appendChild(nameli)
    })
    if(bookli.length>0){
        bookli[0].click()
    }
})



    let Orderedlist=document.createElement("ol")
    Orderedlist.classList="Orderedlist"
function createCard(pdt){
    let orderli=document.createElement("li")
    orderli.className="orderLi"
    orderli.innerHTML=`
    <article class="cardlayout">
    <div class="cardimg"><img src=${pdt.img}></div>
    <p class="starRating"></p>
    <h3 class="bookname">${pdt.name}</h3>
    <div class="details">
    <p class="price">${pdt.price}</p>
    <p class="instrock"></p>
    <button type="submit" class="btn">Add to basket</button>
    </div>
    </article>`
    return orderli
}

fetch("./product.json")
.then(response=>response.json())
.then(data=>{
     let inner=document.querySelector(".inner")
    let bookli=document.querySelectorAll(".bookli")
    inner.appendChild(Orderedlist)
    data.forEach(pdt=>{
       
        let orderli=createCard(pdt)
        Orderedlist.appendChild(orderli)
        // inner.appendChild(Orderedlist)
        
    })
   
    bookli.forEach(clk=>{
        clk.addEventListener("click",()=>{
            let category=clk.getAttribute("dataType")
            Orderedlist.innerHTML=""
            let filtered=data.filter(pdt=>pdt.type===category)
            filtered.forEach(pdt=>{
                let orderli=createCard(pdt)
                Orderedlist.appendChild(orderli)
                // inner.appendChild(Orderedlist)
            })
            })
        })
    })
