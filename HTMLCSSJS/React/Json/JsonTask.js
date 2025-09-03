fetch("./Product.json")
.then(response=>response.json())
.then(data=>{
    let container=document.querySelector(".container")
    data.forEach(nme => {
        let ul=document.createElement("ul")
        ul.className="ul"
       ul.innerHTML=`
       <li>${nme.name}</li>`
       container.appendChild(ul)
    });
    
})