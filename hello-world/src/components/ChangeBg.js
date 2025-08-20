import React from "react";
let color=["red","white","black","pink"]
let rndm
function ChangeBg(){
    function clickme(){
    let rndm=Math.floor(Math.random()*color.length)
    document.body.style.backgroundColor=color[rndm]
    console.log(rndm)

    }
    return(
        <div>
            <button onClick={()=>clickme()}>click here</button>
        </div>
    )
        // <div style={{BackgroundColor:}}></div>
    
}

