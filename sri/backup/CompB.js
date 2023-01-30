import React from "react";
class CompB extends React.Component {


    render(){


        return <>
            <h2>Component B</h2>
           
            {/* <h2>wish me message:{this.props.two}</h2> */}
            <h2>wish me message:{this.props.name}</h2>
            <h2>wish me message:{this.props.two}</h2>
        </>
    }
}
export default CompB