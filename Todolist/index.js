const task =document.querySelector(".inputtxt")
const tasklist=document.querySelector(".ultodo")
function addTask(){
    
   let li= document.createElement("li")
   li.classList.add("litodo")
   li.innerHTML=task.value
   tasklist.appendChild(li)
   task.value=""

   let span=document.createElement("span")
   span.innerHTML="\u00d7"
   li.appendChild(span)

li.addEventListener("click",()=>{
    li.classList.toggle("chkdlitodo")
    span.addEventListener("click",()=>{
        span.parentElement.remove()
    })
})
}