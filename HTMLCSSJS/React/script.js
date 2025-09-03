let btn=document.getElementById("generate")
let text=document.getElementById("text")
btn.addEventListener("click",()=>{
    let rand=Math.floor(Math.random()*100)+1
    text.textContent=rand
})


