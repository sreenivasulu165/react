import React, { Component } from 'react'
 import { BrowserRouter as router, route, Switch } from 'react-router-dom'
 import Navbar2 from './Navbar2'

// import Product from './Product'
// import Employee from './Employees/Clock'
// import Employee from './Employee'
//  import Login from './Login'
class App extends Component {
  render() {
    return (
      <>
        <router>
         <Navbar2/>
        </router>
      </>
    )
  }
}
export default App