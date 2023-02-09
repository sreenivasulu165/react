import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>

          <Link to='./Contact' className='navbar-brand'>React Hooks Example  </Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
              <li className='nav-item'><Link to='/usestate' className='nav-link'  >usestate</Link></li>
              <li className='nav-item'><Link to='/counter' className='nav-link'  >product</Link></li>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar