import React from "react";
let values
function InputBox(){
    function inputtype(e){
     values=e.target.value
     console.log(values)
    }
    return(
        <div>
            <input type="text" onInput={inputtype}></input>
            <p>{values}</p>
        </div>
    )
}
export default InputBox 