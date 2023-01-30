import React from "react";

class One extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"Hello"
        }
    }
    gmHandler=()=>{
        this.setState=({msg:"hello sree"})
    }

    render(){
        return(
            <div>
                <h1>One Component</h1>
                <button onClick={this.gmHandler}></button>
            </div>
        )
    }
}
export default One