import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
// import User from './Axios/User/User'
import Message from './Hooks/Message'
import Counter from './Hooks/Counter'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/useState' component={Message} />
                        <Route path='/counter' component={Counter} /> 
                    
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
