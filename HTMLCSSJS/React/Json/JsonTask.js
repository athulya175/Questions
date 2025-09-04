/*    
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
*/

/*
    fetch("./Product.json")
    .then(response=>response.json())
    .then(data=>{
        let container=document.querySelector(".container")
        data.forEach(elements=>{
            let ul=document.createElement("ul")
            ul.className="ul"
            ul.innerHTML=`
            <li>${elements.name}-${elements.ram}</li>`
            container.appendChild(ul)

        })
    })
*/

/*
    fetch("./Product.json")
    .then(response=>response.json())
    .then(data=>{
        let container=document.querySelector(".container")
        let lessRam=data.filter(x=>x.ram<5)
        lessRam.forEach(element=>{
            
            let ul=document.createElement("ul")
            ul.className="ul"
            ul.innerHTML=`
            <li>${element.name}-${element.ram}</li>`
            container.appendChild(ul)
        })
    })
*/

