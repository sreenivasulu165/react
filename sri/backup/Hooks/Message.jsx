import React, { useState } from 'react'

function Message() {
    let message = 'hello'
    let [Vairable,setVairable]=useState('hello');
    // let gmHnadler=()=>{
    //     setVairable("gm")
    // }
    // let gnHnadler=()=>{
    //     setVairable("gn")
    // }
    return (
        <div>
            <h1>Message:{Vairable}</h1>
            <button onClick={()=>{
                setVairable('gm')
            }}>GM</button>
            <button onClick={()=>{
                setVairable('gn')
            }}>GN</button>
        </div>
    )
}

export default Message