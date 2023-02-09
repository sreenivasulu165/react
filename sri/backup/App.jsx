import React from 'react'
import Message from './Message'
let App = () => {
  return <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">React example</a>
  <div className='ml-auto' id="navbarNav">
    <ul class="navbar-nav">
      <li className="nav-list">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li className="nav-list">
        <a class="nav-link" href="#">product</a>
      </li>
    </ul>
  </div>
</nav>
    <Message />
  </div>
}

export default App