import React, { useState } from 'react'
import EtForm from './EtForm'

const EtApp = () => {
    const[Track,settrack]=useState([]);
  return (
    <div>
            <EtForm Track={Track} settrack={settrack}/>
    </div>
  )
}

export default EtApp
