
import { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar2 extends Component {
    render(){
        return (
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <link to='#'className="navbar-brand">React example</link>
                <div className='ml-auto' id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item'> <link to='/home' className='nav-link'>home</link></li>
                        <li className='nav-item'> <link to='/about' className='nav-link'>About</link></li>
                        <li className='nav-item'> <link to='/contact' className='nav-link'>Contact</link></li>
                    </ul></div>
            </nav>
        )
    }
}

export default Navbar2   