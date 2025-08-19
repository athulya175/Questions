import React from "react";
function Alertfn(){
    function clickme(){
        alert("hello")
    }
    return(
        <button onClick={clickme}>Clickme</button>
    )
}
export default Alertfn