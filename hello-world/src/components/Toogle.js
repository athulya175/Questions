import React,{Component}from "react";

class Toogle extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'',
         text:'click here to show'
      }
    }
    clickme(){
        this.setState({
            msg:"this is the hiden msg",
            text:'click here to hide'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.msg}</div>
                <button onClick={()=>this.clickme()}>{this.state.text}</button>
            </div>
        )
    }
}
export default Toogle