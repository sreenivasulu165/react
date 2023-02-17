import React from 'react'
import Navbars from './Navbars'
 import User from './Users/User'
 import Home from './Users/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//  import EtApp from './ET/EtApp'

function App() {
    return (
        <div>
            <Router>    
                <Navbars />
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/home' component={Home} />
                    {/* <Route path='/etapp' component={EtApp}/>   */}
                    
                </Switch>
            </Router>
        </div>
    )
}

export default App