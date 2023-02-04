import React from "react";
class Message extends React.Component {
   state = {
      message: "hello"
   }
   gmHandler = () => {
      console.log("test case 123");
      this.setState({ message: 'Hello good morning' })
   }
   gaHandler = () => {
      this.setState({ message: 'hello good after noon' })
   }

   render() {
      console.log("one")
      return <div>
         <h1>message component</h1>
         <h2>message:{this.state.message}</h2>
         <button onClick={this.gmHandler}>gm</button>
         <button onClick={this.gaHandler}>ga</button>
      </div>
   }
}

export default Message