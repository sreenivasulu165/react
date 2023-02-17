import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Dummy/Home'
import About from './Dummy/About'
import ContactApp from './Navbar/Contact/ContactApp'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/contactapp' component={ContactApp} />
                        <Route path='/about' component={About} /> 
                    
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
