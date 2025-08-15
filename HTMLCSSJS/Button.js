//*****************************Beginner Level*************************** */

/*
    //Problem-1
    let container =document.querySelector(".container")
    let colours=["green","pink","peach","yellow"]
    let i=0
    function Click(){
        container.style.backgroundColor=colours[i]
        i++
        if(i>colours.length){
            i=0
        }
    }
*/

/*
    //problem2
    const text=document.getElementById("clickhere")
    const h1=document.getElementById("h1")
    text.addEventListener("click",()=>{
        if(h1.style.display==="block"){
            h1.style.display="none"
            text.textContent="click here to show more"
        }
        else{
            h1.style.display="block"
            text.textContent="click here to show less"
        }
        
    })
*/


/*
    //problem3
    const increment=document.getElementById("increment-btn")
    const decrement=document.getElementById("decrement-btn")
    const countdisplay=document.getElementById("count")
    let count=0
    countdisplay.textContent=count
    increment.addEventListener("click",()=>{
        count=count+1
       countdisplay.textContent=count
    })
    decrement.addEventListener("click",()=>{
        count=count-1
        countdisplay.textContent=count
    })
*/

/*
    //problem4
    const hov=document.getElementById("hov")
    hov.addEventListener("mouseover",()=>{
        hov.textContent="Leave me"
        hov.style.color="red"
    })
    hov.addEventListener("mouseleave",()=>{
        hov.textContent="Hover Me"
        hov.style.color="green"
    })
*/

//***********************Intermediate Level******************************** */
/*
    //problem5
    const text= document.querySelector(".txt")
    const btn=document.querySelector(".btn")
    const unorderd=document.getElementById("unorderd")
    btn.addEventListener("click",()=>{
        const lists=text.value
        if(lists!==""){
            const li=document.createElement("li")
            li.textContent=lists
            unorderd.appendChild(li)
            text.value=""
        }
    })
*/


/*
    //problem6
    const color=document.querySelector(".color")
    const click=document.querySelector(".click")
    const Showclr=document.querySelector(".Showclr")
    click.addEventListener("click",()=>{
        const filclr=color.value
        Showclr.style.backgroundColor=`${filclr}`
        color.textContent=""
    })
*/

/*
    //problem7
    const input=document.querySelector(".input")
    const click=document.querySelector(".click")
    const unorderd=document.getElementById("unorderd")
    click.addEventListener("click",()=>{
        let contents=input.value
        let li=document.createElement("li")
        li.classList.add("listid")
        li.textContent=contents

        let cross=document.createElement("span")
        cross.innerHTML="\u00d7"
        li.append(cross)
        unorderd.appendChild(li)
        input.value=""
        cross.addEventListener("click",(event)=>{
                li.remove()
            })
        li.addEventListener("click",()=>{
            li.style.textDecoration="line-through"
            li.style.listStyle="disc"
        
        })
    })
*/


/*
    //problem8
    const alldt=document.getElementsByTagName("dt")
    const alldd=document.getElementsByTagName("dd")
    for(let i=0;i<alldt.length;i++){
        alldt[i].addEventListener("click",()=>{
            if(alldd[i].style.display=="block"){
                alldd[i].style.display="none"
            }
            else{
                alldd[i].style.display="block"
            }
        
    })
    }
*/


/*
    //problem9
    const images=document.querySelectorAll(".problem9 img")
    const prev=document.getElementById("prev")
    const next=document.getElementById("next")
    let curindx=0
    images.forEach(x=>x.style.display="none")
    images[curindx].style.display="block"

    next.addEventListener("click",()=>{
        images[curindx].style.display="none"
        curindx=(curindx+1+images.length)%images.length
        images[curindx].style.display="block"
    })
    prev.addEventListener("click",()=>{
        images[curindx].style.display="none"
        curindx=(curindx-1+images.length)%images.length
        images[curindx].style.display="block"
    })
*/

//****************************Challenge Level******************************* */

/*
const labels=document.getElementsByTagName("input")
const btn=document.querySelector(".submit")
const form=document.getElementById("form")
const names=document.getElementById("name")
const password=document.getElementById("password")
const email=document.getElementById("email")
form.addEventListener("submit",function(event){
    names.setCustomValidity("")
    password.setCustomValidity("")
    email.setCustomValidity("")
    if(names.value.trim()===""){
        names.setCustomValidity("Please enter your name")
    }
    if(!email.value.includes("@")){
        email.setCustomValidity("Email must contain '@'")
    }
*/