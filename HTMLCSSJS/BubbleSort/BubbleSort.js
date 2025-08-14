const lists=document.getElementsByClassName("list")
const first=document.getElementById("first")
const second=document.getElementById("second")
const third=document.getElementById("third")
const fourth=document.getElementById("fourth")
const fifth=document.getElementById("fifth")
for(list of lists){
    list.addEventListener("dragstart",function(e){
        let selected=e.target

        first.addEventListener("dragover",function(e){
        e.preventDefault()
    })
    first.addEventListener("drop",function(e){
        first.appendChild(selected)
        selected=null
    })
        second.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        second.addEventListener("drop",function(e){
            second.appendChild(selected)
            selected=null
        })
        third.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        third.addEventListener("drop",function(e){
            third.appendChild(selected)
            selected=null
        })
        fourth.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        fourth.addEventListener("drop",function(e){
            fourth.appendChild(selected)
            selected=null
        })
        fifth.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        fifth.addEventListener("drop",function(e){
            fifth.appendChild(selected)
            selected=null
        })
    })
}