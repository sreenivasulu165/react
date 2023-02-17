import { Link } from "react-router-dom"
import React from "react"

let Navbars=()=>{
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark  navbar expand-lg">
                <Link to='/' className="navbar-brand" >React-User Component</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"><Link to='/user' className="nav-link">user</Link></li>
                        <li className="nav-list"><Link to='/home' className="nav-link">Home</Link></li>
                        {/* <li className="nav-list"><Link to='/etapp' className="nav-link">EtApp</Link></li> */}
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbars