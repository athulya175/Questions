
function addNotes(){
    console.log("clk")
    const notes=document.createElement("div")
    notes.id="note-id"
    notes.innerHTML=`
    <div class="container">
        <div class="contnotes">
            <textarea placeholder="type here......"></textarea>
            <img src="/icons/trash.png" class="trashicon">
        </div>
    </div>

    `
    const trash=notes.querySelector(".trashicon")
    trash.addEventListener("click",function(){
        const container=trash.closest(".container")
        if(container){
            container.remove()
        }
        })

    document.body.appendChild(notes)
}

const addNote=document.querySelector(".createnotebtn")
addNote.addEventListener("click",addNotes)
console.log("click")


