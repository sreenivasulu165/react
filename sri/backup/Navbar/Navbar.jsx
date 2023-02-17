import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='"navbar navbar-dark bg-dark navbar-expand-lg'>

          <Link to='./Contact' className='navbar-brand'>React Hooks Example  </Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
              <li className='nav-list'><Link to='/Home' className='nav-link'  >Home</Link></li>
              <li className='nav-list'><Link to='/About' className='nav-link'  >About</Link></li>
              <li className='nav-list'><Link to='/ContactApp' className='nav-link'  >ContactApp</Link></li>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar