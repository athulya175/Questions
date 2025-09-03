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
