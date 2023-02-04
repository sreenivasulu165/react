import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {

    super(props)
    console.log("first constructor method will executed")
    
    this.state = {
      currenttime: new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({currenttime:new Date().toLocaleTimeString()})
    },1000)
    console.log("third method will be  executed");
  }
  render() {
    console.log("second- render method will be executed");
    return (
        
        <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header bg-success text-white'>
              <h3>time---{this.state.currenttime}</h3>
                <div className='card-body'></div>
              </div>
            </div>
          </div>

          </div>
        </div>
    )
  }
}
